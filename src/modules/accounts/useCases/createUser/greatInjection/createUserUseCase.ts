import { ICreateUserDTO } from "../../../../../dtos/ICreateUserDTO";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";

class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  execute({
    email,
    firstName,
    lastName,
    password,
  }: ICreateUserDTO): User {
    const userExists = this.repository.findByEmail(email);

    if (userExists) {
      throw new Error("User Exists");
    }

    const user: User = new User();

    Object.assign(user, {
      email,
      firstName,
      lastName,
      password,
    });

    return this.repository.create(user);
  }
}

export { CreateUserUseCase };
