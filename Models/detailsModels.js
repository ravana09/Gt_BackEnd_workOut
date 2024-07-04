const mongoose = require("mongoose");
const { Schema } = mongoose;

let detailsScheme = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, require: true },
});

module.exports = mongoose.model("studentDetails", detailsScheme);
