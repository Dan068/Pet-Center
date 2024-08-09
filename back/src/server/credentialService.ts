
import { UserAuthedDTO } from "../dto/userDto";
import { CredentialsIdEntity } from "../entities/CredentialsIdEntity";
import { CredentialsRepository } from "../repositories/CredentialRepository";

export const  createUserCredentialService = async(username:string, password:string ):Promise<CredentialsIdEntity>=>{

const newUserCredential = await CredentialsRepository.create({username, password});
 await CredentialsRepository.save(newUserCredential);
// const user = await UserModel.findOneBy({
//    id: credentials.userId
// })
// if(user){
//    user.credentialId= newUserCredential
//    CredentialsModel.save(newUserCredential)

// }

return newUserCredential

}
export const verifyIDCredential= async (username: string, password:string,):Promise<UserAuthedDTO| null> =>{
   //buscamos al user con el username
   const foundUsercredential:CredentialsIdEntity|null = await CredentialsRepository.findOne({
      where:{username},
      relations:{user:true}
   });
   console.log(foundUsercredential);
   
//revisamos si encontramos algo
if(foundUsercredential ) { 
   if(foundUsercredential.password === password) return {
      login: true,
      user:{
         id: foundUsercredential.user.id,
         name:foundUsercredential.user.name,
         email:foundUsercredential.user.email,
         birthdate:foundUsercredential.user.birthdate,
         nDni:foundUsercredential.user.nDni
      }
   } 
   
   
}
return null;
}