const express = require('express');

const app = express();
const Port = 8000;

app.listen(Port, function (err) {
    if (err) {
        console.log(`Error: ${err}`)
    }
    console.log(`server is running on port ${Port}`)
})