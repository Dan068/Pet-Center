import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({name: "credentialsId"})
export class CredentialsIdEntity {

    @PrimaryGeneratedColumn()
    id :number
    
    @Column({length:100})
    username: string

    @Column({length:100})
    password: string

    @OneToOne(()=> UserEntity, (user) => user.credentialId)
    @JoinColumn()
    user:UserEntity

}