import { AppDataSource } from "../config/data-source";
import { CredentialsIdEntity } from "../entities/CredentialsIdEntity";

export const CredentialsRepository = AppDataSource.getRepository(CredentialsIdEntity)