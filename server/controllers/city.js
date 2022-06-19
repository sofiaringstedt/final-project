import City from "../models/city.js";

export const displayCities = async (req, res) => {
  const cities = await City.find();

  try {
    res.status(200).json({ success: true, response: cities });
  } catch (error) {
    res.status(400).json({ success: false, response: error })
  };
};