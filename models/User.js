const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid password`,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
