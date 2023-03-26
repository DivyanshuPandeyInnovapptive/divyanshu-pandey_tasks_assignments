const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "A todo name must be provided"],
    maxlength: [200, "Todo must be at max 200 characters"],
  },
  day: {
    type: String,
    required: [true, "A todo must have day and time"],
  },
  reminder: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
