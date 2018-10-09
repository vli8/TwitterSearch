const express = require('express')
const path = require('path')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

const app = express()

app.use(volleyball); //logging middleware

//bodyparsing middleware for when you receive a form back to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//default serving file for any incoming request
app.use(express.static(path.join(__dirname, '../public')))

// app.use('/api', require('./api'))

app.get('*', (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})//for any other requests

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
})//error handling


module.exports = app //will be listening on ../main.js