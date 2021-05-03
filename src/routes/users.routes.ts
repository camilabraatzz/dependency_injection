import { Request, Response, Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser/greatInjection";
import { listAllUsersController } from "../modules/accounts/useCases/listAllUsers";

const userRoutes = Router();

userRoutes.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

userRoutes.get("/", (request: Request, response: Response) => {
  return listAllUsersController.handle(request, response);
});

export { userRoutes };
