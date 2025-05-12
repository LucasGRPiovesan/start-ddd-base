import { StoreProfileDTO } from "../dtos/StoreProfileDTO";
import { Result } from "../../../shared/Result";
import { FetchProfileDTO } from "../dtos/FetchProfileDTO";
import { Profile } from "../entities/Profile";
import { IProfileRepository } from "../repositories/IProfileRepository";

export class StoreProfile
{
  constructor(private profileRepository: IProfileRepository) {}

  async execute(data: StoreProfileDTO): Promise<Result<FetchProfileDTO>> 
  {
    try {
      
      const profile: Profile = new Profile(data);
      
      const result = await this.profileRepository.store(profile);
      return Result.success(result);

    } catch (error:any) {        
      
      if (error.code === 'P2002') return Result.error('USER_ALREADY_EXISTS', 409);

      return Result.error('INTERNAL_ERROR', 500);
    }
  }
}
