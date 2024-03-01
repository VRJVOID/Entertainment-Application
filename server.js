const express = require("express");
const app = express();


//const dotenv = require('dotenv');


//dotenv.config();

//const MONGO_URI = process.env.MONGO_URI;

const dbconfig = require('./db');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
