import {Router} from 'express';
import {createdUsersController, getUsersController, deleteUsersController, getUserIdController, loginUserController} from '../controllers/usersController'
//import auth from '../middlewares/autenticacion';

const userRoute: Router = Router() 

//GET /users => Obtener el listado de todos los usuarios.
userRoute.get('/', getUsersController);

//POST /users/register => Registro de un nuevo usuario.
userRoute.post('/register', createdUsersController);

//GET /users/:id => Obtener el detalle de un usuario específico.
userRoute.get('/:id', getUserIdController)

//POST /users/login => Login del usuario a la aplicación.
userRoute.post('/login', loginUserController )

//DELETE /users => Eliminacion de un usuario
userRoute.delete('/', deleteUsersController)


export  default userRoute;