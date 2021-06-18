const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const db = require('./keys').mongoURI


const mongoose = require("mongoose")

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Connection to MongoDB established'))
    .catch(err => console.log(err))

const bodyParser = require("body-parser")//middleware
const cors = require("cors")

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

app.use(cors())
//middleware

app.listen(port, () => { console.log("Server is running on " + port + " port") })

app.use('/cities', require('./routes/cities'))