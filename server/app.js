const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const articles = require('./routes/articlesRoute.js');
const users = require('./routes/usersRoute.js');
const config = require('./config.js');

// const CONNECTION_URL_local = "mongodb://localhost:27017/test";
const CONNECTION_URL_docker = "mongodb://admin:password@mongodb"
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL_docker, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

let app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     if (req.method === 'OPTIONS') {
         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});

app.use('/api/articles', articles);
app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
/* 
app.listen(5000, () => {
    console.log('Server started on port', 5000);
}); */
