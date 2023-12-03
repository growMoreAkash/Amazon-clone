const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51OJ4CHSJ7Omkeg3wrgm3rpPtgP4fEg5dWIMNdBUSwU1lsPj0xZqvaJymezeipZAEuMLWuvdcRQTzNyMe9VSGl60A00Qusvqq8o'  )

const app = express()
app.use(cors({origin:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("nln")
})

exports.api = functions.https.onRequest(app)