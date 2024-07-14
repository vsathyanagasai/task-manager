const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// Routes
app.use('/tasks', tasksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error details:', err.message);
  console.error('Error stack:', err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
