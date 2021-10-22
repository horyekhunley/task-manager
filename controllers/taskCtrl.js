const getAllTasks = (req, res) => {
    res.send('All items')
}
const createNewTask = (req, res) => {
    res.json(req.body)
}
const getOneTask = (req, res) => {
    res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.send('Task updated')
}
const deleteTask = (req, res) => {
    res.send('Task deleted')
}
module.exports = {
    getAllTasks,
    createNewTask,
    getOneTask,
    updateTask,
    deleteTask
}