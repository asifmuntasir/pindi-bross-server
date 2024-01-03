const express = require('express');
const app = express();
const cors = require('cors');

// add dotenv
require('dotenv').config();

const port = process.env.PORT || 1702;


// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('I am fucking!!!');
});


app.listen(port, () => {
    console.log(`Pindi Bross is running on port ${port}`);
});