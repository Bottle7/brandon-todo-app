const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Todo Express API with Swagger',
      version: '1.0.0',
      description: 'This is a CRUD API application made with Express for recording todos.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./swagger/docs/*.yaml'],
};

const swaggerConfig = swaggerJsdoc(options);

module.exports = swaggerConfig;
