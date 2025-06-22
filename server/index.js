const express = require ('express');
const morgan = require('morgan');
const admin = require('./routes/authRoute')
const dashboard = require('./routes/dashboardRoute')
// const sensor = require('./routes/sensorRoute')
require('dotenv').config();

const app = express();

//middleware setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//Route Setup
app.use('/api/admin', admin)
app.use('/api/dashboard', dashboard )
// app.use('/api/sensors', sensor)

const port = process.env.PORT || 8080

//listen port
app.listen(port, () =>{
    console.log(`server running in ${process.env.DEV_MODE} Mode on http://localhost:${process.env.PORT}`);  
}) 