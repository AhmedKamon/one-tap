const mongoose = require('mongoose');

const qrCodeDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  org: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.qrCodeData || mongoose.model('qrCodeData', qrCodeDataSchema);
