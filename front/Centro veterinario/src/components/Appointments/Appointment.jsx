import styles from './Appointments.module.css'
const Appointment =({data, fName})=> {
    
    return (
        <>
        <div className='cardAppointment'>
         <h5>{fName}</h5>

            <span>{`Fecha:${data.date} Horario:${data.time}`}</span>
            <span>{data.status}</span>
        </div>
    
        </>
    )
    }
    export default Appointment;
    // {
    //     "id": 3,
    //     "date": "2020-04-17",
    //     "time": "2020-04-17",
    //     "status": "Activo",
    //     "user": {
    //       "id": 4,
    //       "name": "joel",
    //       "email": "joel@mail",
    //       "birthdate": null,
    //       "nDni": "jbj"
    //     }
    //   },