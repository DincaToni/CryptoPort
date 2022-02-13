const express = require('express')
const router = express.Router()

const Transaction = require('../../models/transaction')


//get request api/transactions
router.get('/', (req, res) => {
    Transaction.find()
        .sort({ date: -1 })
        .then(transactions => { res.json(transactions) })
})

//post request api/transactions
router.post('/', (req, res) => {
    const newTransaction = new Transaction({
        coin: req.body.coin,
        units: req.body.units,
        pricePerUnit: req.body.pricePerUnit
    })

    newTransaction.save()
        .then(transaction => { res.json(transaction) })
})

//delete request api/transactions
router.delete('/:id', (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => transaction.remove()
            .then(() => res.json({ succes: true })))
        .catch(err => res.status(404).json({succes: false}))
})

module.exports = router