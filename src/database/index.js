import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno]; // array contendo todos os models

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// falando que o model(por ex: Aluno), precisa da conexão do Sequelize
