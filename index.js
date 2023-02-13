const express = require('express')
const app  = express()
const path = require('path')

app.get('/calc', (req, res) => {
const first = parseInt(req.query.num01)
const second = parseInt(req.query.num02)
const third = parseInt(req.query.num03)
const fourth = parseInt(req.query.num04)
const fifth = parseInt(req.query.num05)
const sixth = parseInt(req.query.num06)
const seventh = parseInt(req.query.num07)
const eight = parseInt(req.query.num08)
const nineth = parseInt(req.query.num09)
const tenth = parseInt(req.query.num10)

const array1 = [first, second, third, fourth, fifth, sixth, seventh, eight, nineth, tenth]
const sum = array1.reduce((a,b) => a+b)
const product = array1.reduce((a,b) => a*b)

res.send(`the sum of the numbers you entered is ${sum} and their product is ${product}`)
})

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'calculator.html'))

})
app.listen(3000)