// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const taskController = require('../controllers/taskController');

// 🟢 Get all users
router.get('/', taskController.getTasks);
// router.post('/', taskController.createUser);
// router.put('/:id', taskController.updateUser);
// router.delete('/:id', taskController.deleteUser);

module.exports = router;
