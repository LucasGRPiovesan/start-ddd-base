import { IProfileRepository } from '../repositories/IProfileRepository';
import { FetchProfileDTO } from '../dtos/FetchProfileDTO';
import { NotFoundException } from '../../../shared/exceptions/NotFoundException';

export class FetchProfile {
  constructor(private profileRepository: IProfileRepository) {}

  async execute(uuid:string): Promise<FetchProfileDTO | null> {
    const profile = await this.profileRepository.findUnique(uuid);

    if (!profile) throw new NotFoundException('Profile not found!');
    
    return profile;
  }
}
