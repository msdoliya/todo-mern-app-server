const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { dbConnect } = require('./config/dbConnect');
const { route } = require('./routes/todoRoute');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser')
//dbConnect

app.use(cors());

dbConnect();

//Middleware
app.use(express.json());
//Routes

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
    }); 

    
    app.use(bodyParser.json({extended:true}));
    app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', route);
//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
