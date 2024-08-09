import { useState } from "react";
import { validate } from "../../helpers/validate";

const Login = ({onLogin}) => {
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
    
    return (
        <>
        <form action="" className="" onSubmit={handleSubmitForm}>
            <h2>Iniciar sesion</h2>
            <div className="">
                <label htmlFor="username">Usuario</label>
                <input 
                type="text" 
                className="" 
                name="username"
                onChange={handleChange} 
                value ={input.username}/>
                {/* {errors.username&& <p style={{color:'red'}}>{errors.username}</p>} */}
            </div>
            <div className="">
                <label htmlFor="password">Contraseña</label>
                <input 
                type="password" 
                className="" 
                name="password" 
                onChange={handleChange} 
                value ={input.password}/>
                {/* {errors.password &&<p style={{color:'red'}}>{errors.password}</p>} */}

            </div>
            <div className="">
                <button 
                type="submit" 
                className="" 
                >Iniciar sesion</button>
            </div>
        </form> 
            <span className="">No tienes cuenta? Registrate ahora</span>
            <div className="">
                <a href="./Register.jsx">Registrarse</a>
            </div> 
    
        </>
    )
    }
    export default Login;