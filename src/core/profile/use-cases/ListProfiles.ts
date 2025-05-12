import { IProfileRepository } from '../repositories/IProfileRepository';
// import { Profile } from '../entities/Profile';
import { ListProfileDTO } from '../dtos/ListProfileDTO';

export class ListProfiles {
  constructor(private profileRepository: IProfileRepository) {}

  async execute(): Promise<ListProfileDTO[]> {
    return await this.profileRepository.findAll();
  }
}
