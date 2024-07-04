const { Schema, model } = require("mongoose");

const bloodDonorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  upazila: {
    type: String,
    required: true,
  },
  union: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
});

const BloodDonor = model("BloodDonor", bloodDonorSchema);
module.exports = BloodDonor;
