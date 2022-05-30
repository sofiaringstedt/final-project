import User from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req,res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
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
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          accessToken: user.accessToken,
          userId: user._id
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

export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  const user = await User.findOne({ accessToken });

  if (user) {
    next();
  } else {
    res.status(401).json({ 
      success: false,
      message: "You need to be logged in to see your vaccination card!"
    });
  };
};

export const userPage = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Yay you are logged in"
  });
};