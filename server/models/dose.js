import mongoose from "mongoose";

const DoseSchema = mongoose.Schema({
  dose: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Number,
    required: true
  },
  batchNumber: {
    type: String
  },
  nextDose: {
    type: Number
  }
})

module.exports = mongoose.model("Dose", DoseSchema);