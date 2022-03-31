import dotenv from 'dotenv';

dotenv.config();

import './src/database'; // chamando o index.js(que faz a conexão dos models com o sequelize) ao startar o servidor
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express(); // setando o express para o app
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({
      extended: true,
    }));

    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // exportando o express
