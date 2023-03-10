const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))
app.use(cors())
app.use(
    fileUpload({
        tempFileDir: '/tmp/',
        useTempFiles: true,
        limits: {fileSize: 5*1024*1024}
    })
);

const admin = require('./routes/adminRoutes')

app.use('/api/v1/admin', admin)

module.exports = app
