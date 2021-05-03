import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
  create(user: ICreateUserDTO): User;
  allUsers(): User[];
  findByEmail(email: string): User;
  findById(id: string): User;
}

export { IUserRepository };
