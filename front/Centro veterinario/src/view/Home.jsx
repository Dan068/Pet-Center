import { useState } from "react";
import axios from "axios";
import MyAppointments from "./MyAppoinments";
import Login from "./Login/Login";
import NavBar from '../NavBar/NavBar'


const Home =()=> {
  const [ session, setSession] = useState({
        login: false,
        user:{}
      });
    
    const onLogin = (userData)=>{
      const url ='http://localhost:3001/users/login'
      axios.post(url, userData)
      .then(res =>{
        try {
          if(res.data.login) setSession({
            ...session,
            login: true,
            user: res.data.user
          });
        } catch (error) {
          alert(error)
        }
      })
      }
return (
    <>
    <div>
    {session.login? <NavBar/>:null}
        {session.login? <MyAppointments userId={session.user.id}/>: <Login onLogin ={onLogin}/>}
    </div>
    </>
)
}
export default Home;