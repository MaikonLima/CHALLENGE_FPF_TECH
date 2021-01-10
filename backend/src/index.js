const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(routes);


app.listen(3333);