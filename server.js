const express = require("express");
const Sushi = require('./models/sushiModel')

const db = require("./db.js");

const app = express();

app.use(express.json());

const sushisRoute = require('./routes/sushisRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require("./routes/orderRoute")

app.use('/api/sushis/', sushisRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)

app.get("/", (req, res) => {
    res.send("Server working !!");
});




const port = process.env.PORT || 5000;

app.listen(port, () => 'Server running on port!!');