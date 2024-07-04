const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserDetailsSheme = new Schema({
  name: { type: String },
  email: { type: String },
});

module.exports = mongoose.model('UserDetails', UserDetailsSheme);
