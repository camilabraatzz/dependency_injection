import { UserRepository } from "../../../repositories/implementations/UserRepositoryWithoutImplements";
import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
