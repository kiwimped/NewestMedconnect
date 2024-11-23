const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express();
const appointment = require('./routes/Appointments')
//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('database Connected'))
.catch((err)=> console.log('DATABASE not connected',err))

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/',require('./routes/authRoutes'))
app.use('/', appointment);
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))