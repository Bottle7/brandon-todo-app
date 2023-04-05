const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger/swagger-conf');
const cors = require('cors');
const logger = require('morgan');

const { healthRouter, todosRouter, notFoundRouter } = require('./routes/index');

const app = express();

/**
 * Swagger
 */
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

/**
 * CORS
 */
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Base path
 */
app.get('/', (_, res) => res.redirect('/api/todos'));

/**
 * Routers
 */
app.use('/api/health', healthRouter);
app.use('/api/todos', todosRouter);

// 404 page for any non-matching URLs
app.use('*', notFoundRouter);

module.exports = app;
