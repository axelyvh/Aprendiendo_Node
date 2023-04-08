import { IUserRepository } from "../../application/repositories/iuser-repository";
import { User } from "../../domain/entities/user";

const users: User[] = [
  { id: "1", email: "albert.hello@gmail.com" },
  { id: "2", email: "pepe.hello@gmail.com" },
];

export class InMemoryUserRepository implements IUserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((x) => x.id == userId);
    if (!user) {
      return null;
    }
    return new User(user.id, user.email);
  }
}
