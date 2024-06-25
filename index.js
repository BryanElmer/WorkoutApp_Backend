require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

// Middleware
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port 4000')
    })
  })
  .catch((error) => {
    console.log(error)
  })

// let isConnected;

// async function connectToDatabase() {
//   if (isConnected) {
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     isConnected = true;
//     console.log('connected to db');
//   } catch (error) {
//     console.log(error);
//   }
// }

// connectToDatabase();

module.exports = app;