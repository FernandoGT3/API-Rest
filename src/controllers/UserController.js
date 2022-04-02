import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      console.log('USER_ID', req.userId);

      console.log('USER_EMAIL', req.userEmail);
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id); // por primary key
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id); // por primary key
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não Existe'],
        });
      }

      const novoUser = await user.update(req.body);

      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id); // por primary key
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não Existe'],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
// exportando a classe já instanciada, porque queremos já o objeto
// da instância, e não a classe em si
