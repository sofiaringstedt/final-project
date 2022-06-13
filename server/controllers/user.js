import bcrypt from "bcrypt";

import User from "../models/user.js";
import Dose from "../models/dose.js";

export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  const user = await User.findOne({ accessToken });

  if (user) {
    req.user = user
    next();
  } else {
    res.status(401).json({ 
      success: false,
      response: "You need to be logged in to see your vaccination card!"
    });
  };
};

export const userPage = async (req, res) => {
  const { userId } = req.params;

  try {
    const queriedUser = await User.findById(userId).populate("doses", {
      dose: 1,
      date: 1,
      batchNumber: 1,
      nextDose: 1
    });

    if (queriedUser) {
      res.status(200).json({ success: true, response: queriedUser });
    } else {
      res.status(404).json({ success: false, response: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
};

export const getDoses = async (req, res) => {
  const { userId } = req.params;

  try {
    const queriedUser = await User.findById(userId).populate("doses");
    if (queriedUser) {
      res.status(200).json({ success: true, response: queriedUser.cards });
    } else {
      res.status(404).json({ success: false, response: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
};

export const createUser = async (req,res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const oneUppercaseCharacter = /(?=.*[A-Z])/;
    const oneLowercaseCharacter = /(?=.*[a-z])/;
    const oneSpecialCharacter = /(?=.*[@$!#%*?&-])/;

    const salt = bcrypt.genSaltSync();

    const response = (condition) => {
      try {
        return res.status(400).json({
        success: false,
        response: `Password must contain at least ${condition}`
      })
      } catch(error) {
        console.log(error.message)
      }
    };

    if (password.length < 8) {
      return response("8 characters.")
    } 

    if (!oneUppercaseCharacter.test(password)) {
      return response("one uppercase letter.")
    } 

    if (!oneLowercaseCharacter.test(password)) {
      return response("one lowercase letter.")
    } 

    if (!oneSpecialCharacter.test(password)) {
      return response("one special character (@$!#%*?&-).")
    } 

    const user = await new User({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, salt)
    }).save();
    
    if (email && password && firstName && lastName) {
      res.status(201).json({
        success: true,
        response: {
          userId: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          accessToken: user.accessToken
        }
      })
    } else {
      res.status(409).json({
        success: false,
        response: "Could not create user"
      })
    }
  } catch (error) {
    res.status(409).json({
      success: false,
      response: error
    })
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body; 
  
  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)){
      res.status(200).json({
        success: true,
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accessToken: user.accessToken
      });
    } else {
      res.status(404).json({ success: false, response: "User not found" })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error
    });
  };
};

export const modifyUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, password } = req.body;

  try {
    const oneUppercaseCharacter = /(?=.*[A-Z])/;
    const oneLowercaseCharacter = /(?=.*[a-z])/;
    const oneSpecialCharacter = /(?=.*[@$!#%*?&-])/;

    const salt = bcrypt.genSaltSync();

    const response = (condition) => {
      try {
        return res.status(400).json({
        success: false,
        response: `Password must contain at least ${condition}`
      })
      } catch(error) {
        console.log(error.message)
      }
    };

    if (password.length < 8) {
      return response("8 characters.")
    } 

    if (!oneUppercaseCharacter.test(password)) {
      return response("one uppercase letter.")
    } 

    if (!oneLowercaseCharacter.test(password)) {
      return response("one lowercase letter.")
    } 

    if (!oneSpecialCharacter.test(password)) {
      return response("one special character (@$!#%*?&-).")
    } 

    const editUser = await User.findByIdAndUpdate(
      userId,
      { $set: { userId: _id, firstName, lastName, email, password: bcrypt.hashSync(password, salt)} },
      { new: true }
    );

    if (editUser) {
      res.status(201).json({ success: true, response: editUser });
    } else {
      res.status(409).json({ success: false, response: "Could not edit user"});
    }
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
};

export const addDoseToUser = async (req, res) => {
  const { userId, doseId } = req.params;

  try {
    const queriedUser = await User.findById(userId);

    if (queriedUser) {
      const queriedDose = await Dose.findById(doseId);

      if (queriedDose) {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          {
            $push: {
              doses: queriedDose,
            },
          },
          { new: true }
        );
        res.status(200).json({ success: true, response: updatedUser });
      } else {
        res.status(404).json({ success: false, response: "Dose not found" });
      }
    } else {
      res.status(404).json({ success: false, response: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
};