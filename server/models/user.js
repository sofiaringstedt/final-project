import mongoose from "mongoose";
import crypto from "crypto";

const validateEmail = (email) => {
  const emailPatternValidation = /^\S+@\S+\.\S{2,}$/g;
  return emailPatternValidation.test(email);
};

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    validate: {
      validator: (email) => validateEmail(email),
      message: "Email validation failed"
    },
    required: [true, "Email is required"]
  },
  firstName: {
    type: String, 
    trim: true,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String, 
    trim: true,
    required: [true, "Last name is required"]
  },
  password: {
    type: String, 
    minLength: 8,
    required: [true, "Password is required"]
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  },
  doses: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Dose" 
  }],
});

module.exports = mongoose.model("User", UserSchema);