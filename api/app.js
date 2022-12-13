const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const errorHandler  = require('./middlewares/errorHandler');
const userRoute = require('./routes/userRoute')


const app = express()

// middlewares // body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors())

// serving static file
app.use(express.static(path.join(__dirname, 'public')));

// router init
const router = express.Router();

// api router
app.use('/api/v1/user', userRoute)





app.use(errorHandler)

module.exports = app