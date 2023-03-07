const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))

const admin = require('./routes/adminRoutes')

app.use('/api/v1/admin', admin)

module.exports = app
