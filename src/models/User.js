import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          // objeto onde fazemos a validação deste campo
          // o Sequelize usa o Validator
          len: {
            args: [3, 255], // argumentos(min de 3 caracteres e max de 255)
            msg: 'Campo nome deve conter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já Existe',
        },
        validate: {
          isEmail: {
            msg: 'Email Inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // não existe na base de dados, por isso (virtual)
        defaultValue: '',
        validate: {
          // objeto onde fazemos a validação deste campo
          // o Sequelize usa o Validator
          len: {
            args: [6, 50],
            msg: 'A senha deve conter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    }); // adicionando um hook para dizer quando for salvar os dados na base, antes jogue o valor de
    // password em password_hash
    return this;
  }
}
