import { Request, Response, Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser/greatInjection";

const userRoutes = Router();

userRoutes.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { userRoutes };
