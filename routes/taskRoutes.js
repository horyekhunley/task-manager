const express = require('express')
const router = express.Router()

const { getAllTasks, createNewTask, updateTask, getOneTask, deleteTask } = require('../controllers/taskCtrl')

router.route('/').get(getAllTasks).post(createNewTask)
router.route('/:id').patch(updateTask).get(getOneTask).delete(deleteTask)

module.exports = router