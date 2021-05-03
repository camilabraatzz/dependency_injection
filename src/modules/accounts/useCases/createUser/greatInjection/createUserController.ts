import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  private test = 'TEM';

  handle(request: Request, response: Response): Response {
    const { firstName, email, lastName, password } = request.body;

    const user = this.createUserUseCase.execute({
      firstName,
      lastName,
      email,
      password,
    });

    return response.status(201).send(user);
  }
}

export { CreateUserController };
