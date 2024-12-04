const express = require('express');
const sequelize = require('./config/database');
const Voo = require('./models/voo');
const vooRoutes = require('./routes/voo');
const { swaggerUi, swaggerSpec } = require('./config/swagger'); // Swagger, se configurado


const app = express();
app.use(express.json());

// Configuração do Swagger
app.use('/api-aeroporto', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use('/voos', vooRoutes);

// Sincronizar modelos e iniciar o servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado!');
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
      console.log('Documentação disponível em http://localhost:3000/api-aeroporto');
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });
