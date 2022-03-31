import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Samuel',
      sobrenome: 'Santos',
      email: 'santos@gmail.com',
      idade: 38,
      peso: 79,
      altura: 1.91,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
// exportando a classe já instanciada, porque queremos já o objeto
// da instância, e não a classe em si
