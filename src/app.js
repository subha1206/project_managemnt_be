const express = require('express');
const cors = require('cors');
const status = require('http-status');
const xss = require('xss-clean');
const compression = require('compression');
const helmet = require('helmet');

const morgan = require('./middlewares/morgan');
const globalErrorHandler = require('./middlewares/globalError');

const api = require('./routes/api');

const app = express();

app.use(cors());

// Set security HTTP headers
app.use(helmet());

app.use(morgan);

app.use(express.json());

app.use(xss());

app.use(compression());

app.use('/v1', api);

// this is to catch all the routes other than predefined server routes
app.all('*', (req, res) => {
  res
    .status(status.NOT_FOUND)
    .json({ message: `${req.originalUrl} not found in server` });
});

app.use(globalErrorHandler);

module.exports = app;
