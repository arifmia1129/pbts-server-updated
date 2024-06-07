const { Schema, model } = require("mongoose");

const attachmentSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["pdf", "image"],
  },
});

const noticeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  attachments: [attachmentSchema],
});

const Notice = model("Notice", noticeSchema);

module.exports = Notice;
