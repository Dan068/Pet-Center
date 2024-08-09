import {Router} from 'express'
import { getAllAppointmentController, getIdAppointmentController, createdNewAppoitmentController, cancelAppointmentController } from '../controllers/appointmentController';


const appointmentRoute: Router = Router(); 

//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentRoute.get('/', getAllAppointmentController)

//GET /appointment => Obtener el detalle de un turno específico.
appointmentRoute.get('/shchedule', getIdAppointmentController)

//POST /appointment/schedule => Agendar un nuevo turno.
appointmentRoute.post('/appointment', createdNewAppoitmentController)

//PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentRoute.delete('/cancelar/:id', cancelAppointmentController)

export default appointmentRoute;
