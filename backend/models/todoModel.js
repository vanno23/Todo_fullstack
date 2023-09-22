const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please fill input"]
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;