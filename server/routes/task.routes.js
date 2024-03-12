const taskController = require('../controllers/task.controller')

module.exports = (app) => {
    app.get('/api/findAllTasks', taskController.findAllTasks)
    app.get('/api/findOneTask/:id', taskController.findOneTask)
    app.post('/api/addTask', taskController.addTask)
    app.put('/api/updateTask/:id', taskController.updateTask)
    app.delete('/api/deleteTask/:id', taskController.deleteTask)
}