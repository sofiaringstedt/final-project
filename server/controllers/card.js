import Card from "../models/card.js";
import User from "../models/user.js";

export const createCard = async (req, res) => {
  const { dose, date, batchNumber, nextDose } = req.body;

  try {
    const vaccineCard = await new Card ({
      dose,
      date,
      batchNumber,
      nextDose
    }).save();

    if (dose) {
      res.status(201).json({
        success: true,
        card: {
          dose: vaccineCard.dose,
          date: vaccineCard.date,
          batchNumber: vaccineCard.batchNumber,
          nextDose: vaccineCard.nextDose
        }
      })
    }
  } catch (error) {
    res.status(409).json({
      success: false,
      message: "Could not create vaccine card",
      error: error.message
    })
  }
};

export const displayCard = async (req, res) => {
  const getCard = await Card.find({ userId: User._id })
  res.json({
    data: getCard
  })
}