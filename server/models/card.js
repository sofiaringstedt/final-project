import mongoose from "mongoose";

const CardSchema = mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  dose: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Number
  },
  batchNumber: {
    type: String
  },
  nextDose: {
    type: Number
  }
})

const Card = mongoose.model("Card", CardSchema);

export default Card;