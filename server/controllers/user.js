import User from "../models/user.js";
import bcrypt from "bcrypt";

export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  const user = await User.findOne({ accessToken });

  if (user) {
    req.user = user
    next();
  } else {
    res.status(401).json({ 
      success: false,
      message: "You need to be logged in to see your vaccination card!"
    });
  };
};

export const createUser = async (req,res) => {
  const { firstName, lastName, email, password } = req.body;

  const oneUppercaseCharacter = /(?=.*[A-Z])/;
  const oneLowercaseCharacter = /(?=.*[a-z])/;
  const oneSpecialCharacter = /(?=.*[@$!#%*?&-])/;

  const response = (condition) => {
    return res.status(400).json({
      success: false,
      message: `Password must contain at least ${condition}`
    })
  };

  try {
    const salt = bcrypt.genSaltSync();

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
        user: {
          userId: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          accessToken: user.accessToken
        }
      })
    } 
  } catch (error) {
    res.status(409).json({
      success: false,
      message: "Could not create user",
      error: error.message
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
        accessToken: user.accessToken,
        userId: user._id
      });
    } else {
      throw new Error("Email and password do not match")
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  };
};