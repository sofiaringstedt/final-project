import mongoose from "mongoose";

const DoseSchema = mongoose.Schema({
  dose: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  batchNumber: {
    type: String
  },
  nextDose: {
    type: String
  }
})

module.exports = mongoose.model("Dose", DoseSchema);