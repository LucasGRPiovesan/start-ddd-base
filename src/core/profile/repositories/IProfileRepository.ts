import { StoreProfileDTO } from "../dtos/StoreProfileDTO";
import { ListProfileDTO } from "../dtos/ListProfileDTO";
import { FetchProfileDTO } from "../dtos/FetchProfileDTO";
import { UpdateProfileDTO } from "../dtos/UpdateProfileDTO";

export interface IProfileRepository {
  store(data: StoreProfileDTO): Promise<FetchProfileDTO>;
  findAll(): Promise<ListProfileDTO[]>;
  findUnique(uuid: string): Promise<FetchProfileDTO | null>;
  update(uuid: string, data: UpdateProfileDTO) : Promise<FetchProfileDTO>;
  delete(uuid: string): Promise<any>;
}
