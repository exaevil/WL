const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide the name"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  time: {
    type:String,
    required: [true, "must provide the name"],
  },
  createdAt:{
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("task", TaskSchema);
