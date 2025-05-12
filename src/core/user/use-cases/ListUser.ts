import { IUserRepository } from '../repositories/IUserRepository';
import { ListUserDTO } from '../dtos/ListUsersDTO';

export class ListUsers {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<ListUserDTO[]> {
    return this.userRepository.findAll();
  }
}
