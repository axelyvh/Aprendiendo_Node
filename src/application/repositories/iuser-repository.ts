import { User } from "../../domain/entities/user";

export interface IUserRepository {
    getById(userId: string):Promise<User | null>;
}