import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Insigh Backend (demo)',
      version: '1.0.0',
      description: 'API docs (lightweight demo)'
    }
  },
  apis: ['./src/modules/**/docs/*.yaml']
};

export const swaggerSpec = swaggerJsdoc(options);
