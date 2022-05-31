// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0',
});

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/shared/routes/index.ts'];

const doc = {
  info: {
    version: '1.0.0',
    title: 'Backend-API',
    description: 'API para busca de CEP.',
  },
  servers: [
    {
      url: 'http://localhost:3333',
      description: 'API de Desenvolvimento',
    },
  ],
  basePath: '/',
  consumes: ['application/json'],
  produces: ['application/json'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
