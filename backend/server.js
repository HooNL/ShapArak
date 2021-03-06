const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 7700
const router = require('./routes/goalRoutes')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()

connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', router)
app.use(errorHandler)

app.listen(port, () =>
  console.log(
    'Server is runnig on port ==> ' +
      `http://localhost:${port.green}`.underline,
  ),
)
