const asyncWrapper = require("../middleware/async");
const Task = require("../models/task");

const getAlltasks = asyncWrapper(async (req, res, next) => {
  const tasks =  await Task.find({}).sort({createdAt: 'desc'})
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    res.status(404).json({ msg: `there is no task with the id : ${taskID}` });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    res.status(404).json({ msg: `there is no task with the id : ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask =asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const getTask = await Task.findOneAndDelete({ _id: taskID });
    if (!getTask) {
      res.status(404).json({ msg: `there is no task with the id : ${taskID}` });
    }
    res.status(200).json(getTask);
})
module.exports = { getAlltasks, createTask, getTask, updateTask, deleteTask };
