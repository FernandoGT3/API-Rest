import { Router } from 'express';

import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

router.get('/', userController.index);

router.get('/:id', userController.show);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);
// não precisa por '/users', porque já está vindo da rota do app
/** Nomes dos Métodos dos Controllers
 * index -> Lista todos os Usuários -> GET
 * store/create -> Cria os Usuários -> POST
 * delete -> Apaga um Usuário -> DELETE
 * show -> Mostra um Usuário -> GET
 * update -> Atualiiza um Usuário -> PATCH (quando altera somente um valor)/PUT (altera o objeto)
 */

export default router;
