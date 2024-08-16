import { useEffect, useState } from "react"
import Appointment from "../components/Appointment"
import axios from 'axios'


const MyAppointments=({userId})=>{
    // const [ appointments, setAppointments] = useState([]);
    // const [user, setUser] = useState({});
    // console.log(appointments);

    // useEffect(()=> {
    //     const url= `http://localhost:3001/users/${userId}`
    //     axios.get(url)
    //     // .then((response)=>response.json())
    //     // .then((data)=> setAppointments(data))
    //     .then((res) => {
    //         console.log(res.data);
    //         setAppointments(res.data.appointments);
    //         setUser(res.data);
    // });},
    // []);
    return(
        <>
        <h1>Mis turnos</h1>
        {/* <h1>Mis Turnos</h1>
        <button onClick={clickLoginOut}></button>
        <div>
            {appointments?.map((appointment)=><Appointment key={appointment.id} data ={appointment}/>)}</div> */}
        </>
    )
}
export default MyAppointments
