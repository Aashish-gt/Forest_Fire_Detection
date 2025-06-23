const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');

const admin = require('./routes/authRoute');
const dashboard = require('./routes/dashboardRoute');
const sensor = require('./routes/sensorRoute');
const notify = require('./routes/notifyRoute');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true
}));

// Route setup
app.use('/api/admin', admin);
app.use('/api/dashboard', dashboard);
app.use('/api/sensors', sensor);  // ✅ sensorRoute mounted here
app.use('/api/notify', notify);

// Server listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running in ${process.env.DEV_MODE} Mode on http://localhost:${port}`);
});
