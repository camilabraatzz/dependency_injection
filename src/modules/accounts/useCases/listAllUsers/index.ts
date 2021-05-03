import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListAllUsersController } from "./ListAllUsersControler";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const userRepository = UserRepository.getInstance();
const listAllUserUseCase = new ListAllUsersUseCase(userRepository);
const listAllUsersController = new ListAllUsersController(listAllUserUseCase);

export { listAllUsersController };
