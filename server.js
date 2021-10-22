const express = require('express')
const taskRoutes = require('./routes/taskRoutes')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Task Manager')
})
app.use('/api/v1/tasks', taskRoutes)



const port = process.env.PORT || 3000
const server = app.listen(port, ()=> {
    console.log(`Server running on localhost:${port}`)
})