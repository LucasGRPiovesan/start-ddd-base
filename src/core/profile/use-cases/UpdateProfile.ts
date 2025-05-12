import { Result } from "../../../shared/Result";
import { FetchProfileDTO } from "../dtos/FetchProfileDTO";
import { UpdateProfileDTO } from "../dtos/UpdateProfileDTO";
import { IProfileRepository } from "../repositories/IProfileRepository";

export class UpdateProfile
{
  constructor(private profileRepository: IProfileRepository) {}

  async execute(uuid:string, data: UpdateProfileDTO): Promise<Result<FetchProfileDTO>>
  {
    try {
      
      const updated = await this.profileRepository.update(uuid, data)
      return Result.success(updated);

    } catch (error: any) {
     
      if (error.code === 'P2025') {
        return Result.error('USER_NOT_FOUND', 404);
      }

      return Result.error('INTERNAL_ERROR', 500);
    }
  }
}