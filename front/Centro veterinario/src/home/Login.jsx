import { useState } from "react";
import { urlLogoCentroVeterinario } from "../assets/images/logo";
//import { validate } from "../../helpers/validate";
//import styles from './Login.module.css'

const Login = (onLogin) => {
    const [ input, setInput] = useState({
        username:'',
        password:''

    });
// const [errors, setErrors] = useState({
//     username: 'Username is required',
//     password: 'Password is required'

// });
    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
         console.log(input);
        // setErrors(validate(input))
    }

    const handleSubmitForm = (e) =>{
        e.preventDefault()
        onLogin(input)

    }

    const [ session, setSession] = useState({
        login: false,
        user:{}
      });
    
    // const onLogin = (userData)=>{
    //   const url ='http://localhost:3001/users/login'
    //   axios.post(url, userData)
    //   .then(res =>{
    //     try {
    //       if(res.data.login) setSession({
    //         ...session,
    //         login: true,
    //         user: res.data.user
    //       });
    //     } catch (error) {
    //       alert(error)
    //     }
    //   })
    //   }
    // <div>
    
    //     {session.login? <NavBar/>:null}
    //     {session.login? <MyAppointments userId={session.user.id}/>: <Login onLogin ={onLogin}/>}
    // </div>
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                
                <img src={urlLogoCentroVeterinario} 
                alt="Logo Pet Center" 
                className="mx-auto h-10 w-auto"/>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sacar cita</h2>
                <h4 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Iniciar sesión</h4>
            </div>
        </div>
        
        <div  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmitForm}>
          
            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
                  
                  <div className="mt-2">
                
                    <input 
                      type="text" 
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="username"
                      onChange={handleChange} 
                      value ={input.username}/>
                      {/* {errors.username&& <p style={{color:'red'}}>{errors.username}</p>} */}

                </div>
            </div>

            <div className="mt-2">
                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                  <div>
                    <input 
                      type="password" 
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                      name="password" 
                      onChange={handleChange} 
                      value ={input.password}/>
                      {/* {errors.password &&<p style={{color:'red'}}>{errors.password}</p>} */}

                </div>

            </div>

            <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvide mi contraseña?
                  </a>
            </div>
            <div>

                <button 
                  type="submit" 
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Iniciar sesion</button>
            </div>
            
        </form> 
          

            <p className="mt-10 text-center text-sm text-gray-500">No tienes cuenta? 
                <a href="./Register.jsx"  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Registrarse </a>
            </p>
          
    
    </div>
        </>
    )
    }
    export default Login;