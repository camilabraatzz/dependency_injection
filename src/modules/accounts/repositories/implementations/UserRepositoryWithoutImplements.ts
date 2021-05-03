import { User } from "../../entities/User";

class UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return await user;
  }

  async allUsers(): Promise<User[]> {
    return await this.users;
  }
  
  async findByEmail(email: string): Promise<User> {
    return await this.users.find((user) => user.email === email);
  }
  
  async findById(id: string): Promise<User> {
    return await this.users.find((user) => user.id === id);
  }
}

export { UserRepository };
