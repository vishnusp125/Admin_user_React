const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')


const app = express();
dotenv.config();
connectDB();
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Server Running')

// })   

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

// app.get('/api/notes/:id',(req,res)=>{
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note)
// })

app.use('/api/users',userRoutes)
app.use(errorHandler)
app.use(notFound)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started at port ${PORT}`))