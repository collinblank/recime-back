// DEPENDENCIES
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const defineCurrentUser = require('./middleware/defineCurrentUser')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(defineCurrentUser)

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

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`I'm here on port: ${process.env.PORT}`)
})