import { Request, Response } from "express";
import { getAllAppointmentService, getIdAppointmentService, createdNewAppoitmentService, cancelAppointmentService } from "../server/appointmentService"
import { AppointmentsEntity } from "../entities/AppointmentsEntity";

export const getAllAppointmentController = async( req:Request, res:Response)=>{
    const appointments:AppointmentsEntity[] = await getAllAppointmentService();
    if(appointments.length>0) return res.send(appointments);
    return res.status(400).send({message: 'No hay turno agendados'})
}

export const getIdAppointmentController = async( req:Request, res: Response)=>{
   try {
       if(req.query.id){
           const appointment: AppointmentsEntity| null =  await getIdAppointmentService(+req.query.id);
           if(appointment) return res.status(201).json({message:'Turno encontrado', appointment})
                return res.status(400).send({message: 'Turno no encontrado'})
           } return res.status(400).send({message: 'Falta el id'})
    
   } catch (error) {
    console.error('Error:', error)
    return res.status(500).send('Error interno')
   }

 } 

export const createdNewAppoitmentController = async (req: Request, res:Response) =>{
    try {
        const {date, time, userID }= req.body;
            if(!date|| !time|| !userID) return res.status(400).send('Datos incompletos');
            const newAppointmentController: AppointmentsEntity| null = await createdNewAppoitmentService(req.body);
        if(newAppointmentController)return res.status(201).send(newAppointmentController);
        return res.status(400).send('Datos incompletos')
        
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).send('Error interno')
    }
}

export const cancelAppointmentController = async( req: Request, res: Response)=>{
    try {
        if(req.params.id){
            const appointmentCancellled:number | null =  await cancelAppointmentService(+req.params.id);
            if(appointmentCancellled) return res.status(201).json({message:'Turno cancelado'})
                 return res.status(400).send({message: 'Turno no encontrado'})
            } return res.status(400).send({message: 'Falta el id'})
     
    } catch (error) {
     console.error('Error:', error)
     return res.status(500).send('Error interno')
    }

}