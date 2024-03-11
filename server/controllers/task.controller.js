const Task = require('../models/task.model')

module.exports = {
    // Read All
    findAllTasks: (req, res) => {
        Task.find()
            .then((allTasks) => {
                res.status(200).json(allTasks)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Read One (Finding by _id)
    findOneTask: (req, res) => {
        console.log(req.params);
        Task.findOne({_id: req.params.id})
            .then((oneTask) => {
                res.status(200).json(oneTask)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Create
    addTask: (req, res) => {
        console.log(req.body);
        Task.create(req.body)
            .then((newTask) => {
                res.status(201).json(newTask)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Update (Finding by _id)
    updateTask: (req, res) => {
        Task.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedTask) => {
                res.json(updatedTask)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Delete (Finding by _id)
    deleteTask: (req, res) => {
        Task.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
};