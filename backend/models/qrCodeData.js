const mongoose = require("mongoose");

const qrCodeDataSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imgUrl: {
    type: String,
  },
  color: {
    type: String,
    default: "#171717",
  },
});

module.exports =
  mongoose.models.QrCodeData || mongoose.model("QrCodeData", qrCodeDataSchema);
