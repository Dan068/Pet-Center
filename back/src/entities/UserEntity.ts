import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { CredentialsIdEntity } from "./CredentialsIdEntity"
import { AppointmentsEntity } from "./AppointmentsEntity"


@Entity({name:"users"})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column({length:100})
    name: string

    @Column({length:100})
    email: string

    @Column({ nullable: true })
    birthdate: Date

    @Column({length:100})
    nDni: string

    @OneToOne(()=> CredentialsIdEntity, ( credentialId)=>credentialId.user)
    @JoinColumn()
    credentialId: CredentialsIdEntity //otra tabla FK

    @OneToMany(()=>AppointmentsEntity, (appointments) => appointments.user)
    appointments : AppointmentsEntity[]

}

