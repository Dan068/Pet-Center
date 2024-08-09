import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({name: "appointment"})
export class AppointmentsEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column("date")
    date: Date

    @Column("date")
    time: Date

    @Column()
    status: Status

    @ManyToOne(()=> UserEntity, (user) => user.appointments)
    user:UserEntity

}
export const enum Status{
    active ='Activo',
    cancelled ='Cancelled'  
}
