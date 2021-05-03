import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { firstName, email, lastName, password } = request.body;

    await this.createUserUseCase.execute({
      firstName,
      lastName,
      email,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
