import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});

const User = mongoose.model("User", UserSchema);

export default User;