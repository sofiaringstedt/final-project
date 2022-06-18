import bcrypt from "bcrypt";

import User from "../models/user.js";
import Dose from "../models/dose.js";

const passwordEmailValidations = (password, email) => {
  const emailPatternValidation = /^\S+@\S+\.\S{2,}$/g;
  const passwordPatternValidaton = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-/+]).{8,}$/;

  if (!passwordPatternValidaton.test(password)) {
    throw "password must be at least 8 characters long with 1 uppercase, 1 lowercase, and 1 special character (#?!@$%^&*-/+)."
  };

  if (!emailPatternValidation.test(email)) {
    throw "Email must contain a @ symbol and end with ('.' word)."
  };
};

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
    res.status(400).json({ success: false, message: "Invalid request", response: error });
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
    res.status(400).json({ success: false, message: "Invalid request", response: error });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const queriedUser = await User.findOne({ email });

  try {
    const salt = bcrypt.genSaltSync();
    passwordEmailValidations(password, email);

    if (!queriedUser) {
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
        });
      } else {
        res.status(409).json({ success: false, response: "Could not create user" })
      }
    } else {
      res.status(409).json({ success: false, response: "User already registered" })
    }
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  };
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
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
    res.status(400).json({ success: false, message: "Invalid request", response: error });
  };
};

export const modifyUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
    passwordEmailValidations(password, email);

    const editedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { firstName, lastName, email, password: bcrypt.hashSync(password, salt) } },
      { new: true }
    );

    if (editedUser) {
      res.status(201).json({
        success: true,
        response: {
          userId: editedUser._id, firstName, lastName, email, accessToken: editedUser.accessToken
        }
      });
    } else {
      res.status(409).json({ success: false, response: "Could not edit user" });
    }
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  };
};

export const addDoseToUser = async (req, res) => {
  const { userId, doseId } = req.params;

  try {
    const queriedUser = await User.findById(userId);

    if (queriedUser) {
      const queriedDose = await Dose.findById(doseId);
      const findUserDoses = await User.findById(userId).populate("doses", { dose: 1, _id: 0 });
      const userAddedDose = findUserDoses.doses.some(dose => dose.dose === queriedDose.dose);

      if (queriedDose && !userAddedDose) {
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
        res.status(400).json({ success: false, response: `${queriedDose.dose} already registered or dose not found` });
      }
    } else {
      res.status(404).json({ success: false, response: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", response: error });
  };
};