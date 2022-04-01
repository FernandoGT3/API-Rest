import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User]; // array contendo todos os models

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// falando que o model(por ex: Aluno), precisa da conexão do Sequelize
