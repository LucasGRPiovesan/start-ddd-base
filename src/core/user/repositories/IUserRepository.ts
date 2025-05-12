import { User } from "../entities/User";
import { StoreUserDTO } from "../dtos/StoreUserDTO";
import { ListUserDTO } from "../dtos/ListUsersDTO";
import { FetchUserDTO } from "../dtos/FetchUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";

export interface IUserRepository {
  store(data: User): Promise<FetchUserDTO>;
  findAll(): Promise<ListUserDTO[]>;
  findUnique(uuid: string): Promise<FetchUserDTO | null>;
  update(uuid: string, data: UpdateUserDTO) : Promise<FetchUserDTO>;
  delete(uuid: string): Promise<any>;
}
