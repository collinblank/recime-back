// DEPENDENCIES
require('dotenv').config();
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// const cookieSession = require('cookie-session')
// const defineCurrentUser = require('./middleware/defineCurrentUser')

// CONFIGURATION / MIDDLEWARE
app.use(cors())
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(defineCurrentUser)

// app.use(cookieSession({
//     name: 'session',
//     keys: [ process.env.SESSION_SECRET ],
//     sameSite: 'strict',
//     maxAge: 24 * 60 * 60 * 1000
// }))

app.use(express.urlencoded({ extended: true }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Recime API'
    })
})

// CONTROLLERS 
 
app.use('/recipes', require('./controllers/recipes_controller'))
 
app.use('/users', require('./controllers/users'))

app.use('/authentication', require('./controllers/authentication'))

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`I'm here on port: ${process.env.PORT}`)
})