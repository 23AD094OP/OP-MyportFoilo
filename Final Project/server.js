const express = require('express');
const DB = require('./db/db.js');
const routes = require('./routes/index.js'); 
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());


app.use('/', routes);

const startServer = async () => {
    await DB();  
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
};

startServer();