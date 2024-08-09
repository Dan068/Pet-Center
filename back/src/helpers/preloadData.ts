import { AppDataSource, UserModel } from "../config/data-source";
import UserDto from "../dto/userDto";

const user1={
    name: "daniela",
    email: "dan@mail",
    birthdate: ('2020-04-22'),
    nDni: "dan",
    username:"dan",
    password:"dan"
   
}

export const preloadData= async ()=>{
   await AppDataSource.manager.transaction(async(transactionEntityManager)=> {
   const users =  await UserModel.find()

   if(users.length)return console.log('No se hizo la precarga de datos');
        const newuser1 = await UserModel.create(user1)
        await transactionEntityManager.save(newuser1)
        console.log('Precarga de datos realizada con éxito');
    })
}
    
    