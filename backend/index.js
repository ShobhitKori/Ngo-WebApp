// Server side code
const express = require ('express');
const app =  express();
const bodyParser = require('body-parser');
const cors =require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const PaymentRouter = require('./Routes/PaymentRouter');


require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req,res) => {
    res.send("PONG");
    console.log('client has been reached the site')
})

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api', PaymentRouter);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})