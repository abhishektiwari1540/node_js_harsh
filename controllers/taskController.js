const db = require('../db');



exports.getTasks = (req, res) => {
  res.send("get data");
};

// // Create a new user
// exports.createUser = (req, res) => {
//   const { name, email } = req.body;
//   db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ message: 'User created', userId: result.insertId });
//   });
// };

// // Update user
// exports.updateUser = (req, res) => {
//   const { name, email } = req.body;
//   const { id } = req.params;
//   db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ message: 'User updated' });
//   });
// };

// // Delete user
// exports.deleteUser = (req, res) => {
//   const { id } = req.params;
//   db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ message: 'User deleted' });
//   });
// };