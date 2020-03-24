const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define a schema
const sampleSchema = new Schema(
  {
    name: String
  },
  { versionKey: false, timestamps: true }
);

const sample = mongoose.model("Sample", sampleSchema);

module.exports = sample;
