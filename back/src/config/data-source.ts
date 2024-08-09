import { DataSource } from "typeorm"
import {  UserEntity } from "../entities/UserEntity"
import { AppointmentsEntity } from "../entities/AppointmentsEntity"
import { CredentialsIdEntity } from "../entities/CredentialsIdEntity"
import { DB_PASSWORD } from "./envs"



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: DB_PASSWORD,
    database: "users",
    //dropSchema: true,
    synchronize: true,
    logging: ['error'],
    entities: [UserEntity, AppointmentsEntity, CredentialsIdEntity],
    subscribers: [],
    migrations: [],

})

 