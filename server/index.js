const express = require('express');
const cors = require('cors');
const { generateFibonacci } = require('./fibonacci');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

app.use(cors());
app.use(express.json());

app.get('/api/fibonacci', (req, res) => {
  const now = new Date();
  const x = now.getMinutes();
  const y = now.getSeconds();
  const n = now.getSeconds();
  const series = generateFibonacci(x, y, n);
  res.json({ series });
});

app.listen(3001, () => {
  console.log('El servidor está corriendo en el puerto 3001');
});


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Fibonacci API',
      version: '1.0.0',
      description: 'API para generar una serie de Fibonacci con la hora',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./server/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
