import mongoose from "mongoose";

const CitySchema = mongoose.Schema({
  city: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  riskLevel: {
    type: String
  },
  country: {
    type: String
  },
  ios2: {
    type: String
  },
  county: {
    type: String
  }
});

module.exports = mongoose.model("City", CitySchema);