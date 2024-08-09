export interface UserResponseDTO{
    id: number
    name: string,
    email:string,
    birthdate: Date,
    nDni: string,
   credentialId: number,
}
export interface UserAuthedDTO{
    login: boolean,
    user:{
        id: number
        name: string,
        email:string,
        birthdate: Date,
        nDni: string,
        
    }
}

interface UserDto{
    name: string,
    email:string,
    birthdate: Date,
    nDni: string,
    username: string,
    password: string,

    
}
export default UserDto