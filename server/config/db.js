import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";

const connectDB = () => {
  try {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

export default connectDB;