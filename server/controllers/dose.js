import Dose from "../models/dose.js";

export const createDose = async (req, res) => {
  const { dose, date, batchNumber, nextDose } = req.body;

  try {
    const vaccineDose = await new Dose ({
      doseId: dose._id,
      dose,
      date,
      batchNumber,
      nextDose
    }).save();

    if (dose) {
      res.status(201).json({
        success: true,
        response: {
          doseId: vaccineDose._id,
          dose: vaccineDose.dose,
          date: vaccineDose.date,
          batchNumber: vaccineDose.batchNumber,
          nextDose: vaccineDose.nextDose
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

export const displayDose = async (req, res) => {
  const userDose = await Dose.find();

   try {
    res.status(200).json({
      success: true,
      response: userDose
    });
  } catch(error) {
    res.status(400).json({
      success: false,
      response: error
    })
  };
}