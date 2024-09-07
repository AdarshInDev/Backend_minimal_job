const express = require('express')
const app = express()
const port =3000
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log('Connect to V1')).catch((err)=>console.log(err))
app.get('/', (req, res) => res.send("hello World!"))
app.listen(port|| process.env.PORT ,() =>console.log(`Example app listening on port ${port || process.env.PORT}!`))