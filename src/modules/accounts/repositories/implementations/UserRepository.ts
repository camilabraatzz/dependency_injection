import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private users: User[];

  private static INSTANCE: UserRepository;

  private constructor() {
    this.users = []
  }

  public static getInstance(): UserRepository {
    if(!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository()
    }

    return UserRepository.INSTANCE;
  }

  create({
    email,
    firstName,
    lastName,
    password,
  }: ICreateUserDTO): User {
    const user: User = new User();

    Object.assign(user, {
      email,
      firstName,
      lastName,
      password,
    });

    this.users.push(user);
    return user;
  }

  allUsers(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  findById(id: string): User {
    return this.users.find((user) => user.id === id);
  }
}

export { UserRepository };
