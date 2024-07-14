const express = require('express');
const router = express.Router();
const Joi = require('joi');

let tasks = [];

const taskSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().min(1).required(),
  completed: Joi.boolean().required()
});

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get task by id
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);   
});

// Create a new task
router.post('/', (req, res) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    console.error('Validation error:', error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Update a task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  const { error } = taskSchema.validate(req.body);
  if (error) {
    console.error('Validation error:', error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  task.title = req.body.title;
  task.description = req.body.description;
  task.completed = req.body.completed;
  res.json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send('Task not found');

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

module.exports = router;
