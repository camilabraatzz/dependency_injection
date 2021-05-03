import { v4 as uuid } from "uuid";

class User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
