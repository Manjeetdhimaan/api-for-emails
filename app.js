

const express = require('express');

const rtsIndex = require('./routes/routes');


const app = express();

app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

const cors = require('cors');
// middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(cors());
app.use('/api', rtsIndex);




// start server
app.listen(3000, () => console.log(`Server started at port : 3000`));