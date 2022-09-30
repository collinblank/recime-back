// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Recime API'
    })
})

// CONTROLLERS 
const recipesController = require('./controllers/recipes_controller')
app.use('/recipes', recipesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`I'm here on port: ${process.env.PORT}`)
})