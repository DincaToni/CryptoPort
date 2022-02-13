const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectID = mongoose.Types.ObjectId

//Create SChema

const transaction = new Schema({
    coin:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    units:{
        type: mongoose.Types.Decimal128,
        required: true
    },
    pricePerUnit:{
        type: mongoose.Types.Decimal128,
        required: true
    }
})

module.exports = Transaction = mongoose.model('transaction', transaction)