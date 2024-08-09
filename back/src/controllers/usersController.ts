import { Request, Response } from 'express';
import { createUserService, deleteUserService, getUsersService, getUserIdService, loginUserService} from '../server/usersService'
import { UserEntity } from '../entities/UserEntity';
import { UserAuthedDTO, UserResponseDTO } from '../dto/userDto';


export const createdUsersController = async (req:Request, res: Response)=>{
    const {name, email, birthdate, nDni, username, password }= req.body;
    if(!name|| !email|| !birthdate|| !nDni|| !username|| !password ){
      return res.status(401).send('Datos incompletos')
    }
    try {
        const newUser:UserResponseDTO = await createUserService(req.body) 
            res.status(201).json({message:'Usuario creado correctamente', newUser})
            
        } catch (error) {
            console.error('Error:', error)
        res.status(500).send('Error en el servidor')
            
    };
         
    };


export const getUsersController = async ( req:Request, res:Response) =>{
    const users:UserEntity[] = await getUsersService();
    res.status(200).json(users)
};

export const getUserIdController = async(req: Request, res: Response)=>{
 
        const user: UserEntity| null = await getUserIdService(+req.params.id);
        if(user){
             return res.status(200).json(user)
        }
        
        return res.status(404).json({message:'Usuario no encontrado'})
    

};

export const loginUserController = async(req:Request, res:Response)=>{
    try {
        const {username, password }= req.body;
        if(!username|| !password ){
          return res.status(400).send('Datos incompletos')
        }
        const userAuthend:UserAuthedDTO|null= await loginUserService(username, password);
         if(userAuthend) 
            return res.send(userAuthend)
            return res.status(400).send('Fallo el login')
        
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).send('Error interno')

    }
};

export const deleteUsersController = async (req:Request, res:Response )=>{
    const {id} = req.body
    await deleteUserService(id);
    res.status(200).json({message: 'Usuario eliminado correctamente'})

};