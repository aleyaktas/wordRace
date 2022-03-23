const express = require('express')
const dotenv = require('dotenv');
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const connectDB = require('./config/db')
const app = express();
dotenv.config();

connectDB();

app.use(express.json())
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)

let port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})