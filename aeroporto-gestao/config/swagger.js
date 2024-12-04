const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuração do Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API gestão de Aeroporto ',
    version: '1.0.0',
    description: 'Documentação da API para gestão do aeroporto',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor Local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Caminho para os arquivos de rotas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
