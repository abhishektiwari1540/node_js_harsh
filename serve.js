// server.js
const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/tasks', tasksRoutes);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
