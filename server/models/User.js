const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { v4: uuidv4 } = require("uuid");

var userSchema = mongoose.Schema({
  _id: {
    type: Object,
    default: uuidv4(),
  },
  local: {
    email: String,
    password: String,
  },
});

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for users
module.exports = mongoose.model("User", userSchema);
