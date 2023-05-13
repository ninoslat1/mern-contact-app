const express = require('express')
const cors = require('cors')
const contactRoute = require('./routes/contact.jsx')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();

app.use(express.json(), cors())
app.use(express.urlencoded({extended: false}))

app.use('/api/contact', contactRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.ENV_PORT, () => {
            console.log(`Connect to MongoDB and listening on port http://localhost:${process.env.ENV_PORT}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = app