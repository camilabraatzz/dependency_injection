import { ICreateUserDTO } from "../../../../../dtos/ICreateUserDTO";
import { User } from "../../../entities/User";
import { UserRepository } from "../../../repositories/implementations/UserRepositoryWithoutImplements";

class CreateUserUseCase {
  constructor(private repository: UserRepository) {}

  async execute({
    email,
    firstName,
    lastName,
    password,
  }: ICreateUserDTO): Promise<User> {
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

    return await this.repository.create(user);
  }
}

export { CreateUserUseCase };
