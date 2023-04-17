const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://bduser:56789@cluster0.x0f7eub.mongodb.net/sushi-hoshi"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log('Database connected successfully');
})

db.on('error', () => {
    console.log('Database connection failed');
})

module.exports = mongoose