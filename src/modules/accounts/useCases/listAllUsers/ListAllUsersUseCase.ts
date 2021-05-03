import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(): User[] {
    return this.userRepository.allUsers();
  }
}

export { ListAllUsersUseCase };
