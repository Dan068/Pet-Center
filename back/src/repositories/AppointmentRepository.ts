import { AppDataSource } from "../config/data-source";
import { AppointmentsEntity } from "../entities/AppointmentsEntity";

export const AppointmentRepository = AppDataSource.getRepository(AppointmentsEntity)