import { log } from "console";
import AppointmentDto from "../dto/appointmentDto";
import { AppointmentsEntity, Status } from "../entities/AppointmentsEntity";
import { UserEntity } from "../entities/UserEntity";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { getUserIdService } from "./usersService";



export const getAllAppointmentService = async():Promise<AppointmentsEntity[]>=>{
    const allApointments:AppointmentsEntity[] = await AppointmentRepository.find({
        relations:{user:true}
    });
    return allApointments
}

export const getIdAppointmentService =async (id:number): Promise<AppointmentsEntity|null>=>{
    try {
        const idAppointment =AppointmentRepository.findOne({
           relations: {user:true},
           where:{id}
   }) 
   return idAppointment
   
        
    } catch (error) {
        return null
        
    }
    
    }

export const createdNewAppoitmentService = async(appointmentData:AppointmentDto):Promise<AppointmentsEntity| null>=>{
    const userFound: UserEntity|null = await getUserIdService(appointmentData.userID)
        if(userFound){
            const newAppointment: AppointmentsEntity =  AppointmentRepository.create({
                date: appointmentData.date,
                time: appointmentData.time,
                status: Status.active,
                user: userFound
            });
            
            await AppointmentRepository.save(newAppointment);
           
            return newAppointment
        }
        return null
}

export const cancelAppointmentService =async(id:number):Promise<number|null>=>{
     const foundAppointment: AppointmentsEntity| null =  await getIdAppointmentService(id);
     if (foundAppointment){
          foundAppointment.status = Status.cancelled
          console.log(foundAppointment);
          
          
        return foundAppointment.id
     }
     return null
}

