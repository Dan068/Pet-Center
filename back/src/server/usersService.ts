import UserDto, { UserAuthedDTO, UserResponseDTO } from "../dto/userDto";
import { createUserCredentialService, verifyIDCredential } from "./credentialService";
import { UserEntity } from "../entities/UserEntity";
import { CredentialsIdEntity } from "../entities/CredentialsIdEntity";
import { UserRepository } from "../repositories/userRepository";
import { CredentialsRepository } from "../repositories/CredentialRepository";



export const createUserService = async (userData: UserDto, ):Promise<UserResponseDTO>=>{
    const newUserCredential:CredentialsIdEntity = await createUserCredentialService(userData.username, userData.password);
    const newUser:UserEntity = await UserRepository.create(userData);
    newUser.credentialId = newUserCredential;
    newUserCredential.user = newUser;
    await UserRepository.save(newUser);
    await CredentialsRepository.save(newUserCredential);
    return {
        id: newUser.id,
        name: newUser.name,
        email:newUser.email,
        birthdate: newUser.birthdate,
        nDni: newUser.nDni,
        credentialId: newUser.credentialId.id
    }
};


export const getUsersService = async (): Promise<UserEntity[]> =>{
    const users: UserEntity[] = await UserRepository.find({
        relations: {
            appointments: true,
            credentialId: true
        }
    })
    return users;
};

export const getUserIdService = async (id:number):Promise<UserEntity|null>=>{
        const idUser= UserRepository.findOne({
            relations: {appointments:true},
            where:{id}
    }) 
    return idUser
    
};

export const loginUserService = async(username:string, password:string):Promise<UserAuthedDTO|null> =>{
   //validar las credenciales
   //encontrar al users
   //empaquetar la respuesta
return  await verifyIDCredential(username, password)


}

export const deleteUserService = async (id: number): Promise<void>=>{
    // users = users.filter((user: IUser)=>{
    //     return user.id !==id
    // });
};