import Dose from "../models/dose.js";

export const displayDose = async (req, res) => {
  const userDose = await Dose.find();

  try {
    res.status(200).json({
      success: true,
      response: userDose
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error
    })
  };
};

export const createDose = async (req, res) => {
  const { dose, date, batchNumber, nextDose } = req.body;

  try {
    const vaccineDose = await new Dose ({
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
    } else {
      res.status(409).json({
        success: false,
        response: "Could not create vaccine card",
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error
    })
  };
};

export const deleteDose = async (req, res) => {
  const { doseId } = req.params;

  try {
    const deletedDose = await Dose.findOneAndDelete({ _id: doseId });

    if (deletedDose) {
      res.status(200).json({ success: true, response: deletedDose });
    } else {
      res.status(404).json({ success: false, response: "Dose not found" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not delete dose",
      response: error
    });
  };
};