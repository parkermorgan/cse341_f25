const swaggerAutogen = require('swagger-autogen')();

const document = {
    info: {
        title: 'My API',
        description: 'Swagger Contacts API'
    },
    host: 'https://cse341-f25.onrender.com',
    schemes: ['https']
};

const jsonFile = './swagger.json';
const routeFiles = ['./routes/index.js'];


swaggerAutogen(jsonFile, routeFiles, document).then(async () => {
    await import('./routes/index.js')
});