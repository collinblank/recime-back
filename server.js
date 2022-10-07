// DEPENDENCIES
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// const cookieSession = require('cookie-session')
// const defineCurrentUser = require('./middleware/defineCurrentUser')

// CONFIGURATION / MIDDLEWARE
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(defineCurrentUser)

app.use(cookieSession({
    name: 'session',
    keys: [ process.env.SESSION_SECRET ],
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000
}))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Recime API'
    })
})

// CONTROLLERS 
const recipesController = require('./controllers/recipes_controller')
app.use('/recipes', recipesController)
const usersController = require('./controllers/users')
app.use('/users', usersController)
const authenticationController = require('./controllers/authentication')
app.use('/authentication', authenticationController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`I'm here on port: ${process.env.PORT}`)
})