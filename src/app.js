require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')
const { NODE_ENV } = require('./config')
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const logoutRouter = require('./logout/logout-router')
const recipesRouter = require('./recipes/recipes-router')
const app = express()
app.set('trust proxy', 1)

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { sameSite: 'None', secure: false } }))

app.use(
  cors({
      origin: 
      // "https://random-recipe-roulette.jonretchless.vercel.app",
      'http://localhost:3000',
      credentials: true
  })
);

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())

app.use('/api/users', usersRouter)
app.use('/api/login', authRouter)
app.use('/api/auth', authRouter)
app.use('./api/logout', logoutRouter)
app.use('/api/recipes', recipesRouter)

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { sameSite: 'None', secure: false } }))


app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
      console.error(error)
      response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app