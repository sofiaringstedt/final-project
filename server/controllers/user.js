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