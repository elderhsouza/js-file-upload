const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const cors = require('cors');
// const helmet = require('helmet');
const { LOGS } = require('./vars');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(LOGS));
// app.use(cors());
// app.use(helmet());

module.exports = app;
