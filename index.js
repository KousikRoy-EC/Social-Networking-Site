const express = require('express');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const app = express();
const Port = 8000;
const db = require("./config/mongodb")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// app.use(express.urlencoded());
app.use(cookieParser())
//use exppress router
app.use("/", require("./routes/index.js"));
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(Port, function (err) {
    if (err) {
        console.log(`Error: ${err}`)
    }
    console.log(`server is running on port ${Port}`)
})