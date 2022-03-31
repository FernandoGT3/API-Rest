// Configuração da Base de Dados
// Também será usado pelo sequelize cli, por isso usando ComonJS

require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true, // diz quando um registro foi criado/atualizado na tabela
    underscored: true, // converte de camelcase para _, ex: 'nomeAluno' -> 'nome_aluno'
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
