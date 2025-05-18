const express = require('express');
const app = express();
const task = require('./task');
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Task Manager</h1><p>Visit <a href="/tasks">/tasks</a> to see the tasks</p>');
});

app.get('/tasks', (req, res) => {
    const taskHtml = task.map(task => `
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.duetime}</td>
            <td>${task.complete ? 'Yes' : 'No'}</td>
        </tr>
    `).join('');

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Task List</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: rgb(54, 54, 157);
                    padding: 40px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    background-color: white;
                }
                th, td {
                    padding: 20px;
                    text-align: center;
                    border-bottom: 5px solid #ddd;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                }
                tr:hover { background-color: #f5f5f5; }
            </style>
        </head>
        <body>
            <h2>My Task List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Due Time</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    ${taskHtml}
                </tbody>
            </table>
        </body>
        </html>
    `;
    res.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
