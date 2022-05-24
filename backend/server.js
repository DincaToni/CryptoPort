const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const transactionRoute = require('./routes/api/transactionRoute')

const app = express()

//bodyparser middleware
app.use(bodyParser.json())

// db config
const db = require('./config/keys').mongoURI

//connect to mongoDB..
mongoose.connect(db)
    .then(() => { console.log("Database connected...") })
    .catch(err => { console.error(err) })

//Using routes 
app.use('/api/transactions', transactionRoute)

const port = process.env.PORT || 5000

app.listen(port, ()=>{console.log(`Server started on port ${port}`)})