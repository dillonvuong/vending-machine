require('dotenv').config()

var path = require('path');
global.appRoot = path.resolve(__dirname);

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('connected to DB!')
})
app.use(express.static('build'))
app.use(express.json())

//Import Routes
const sodaRoutes = require('./routes/sodas')
app.use('/sodas', sodaRoutes)

app.listen(8080, () => console.log('Server Started'))