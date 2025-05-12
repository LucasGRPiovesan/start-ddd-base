import { Result } from "../../../shared/Result";
import { FetchUserDTO } from "../dtos/FetchUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { IUserRepository } from "../repositories/IUserRepository";

export class UpdateUser
{
  constructor(private userRepository: IUserRepository) {}

  async execute(uuid:string, data: UpdateUserDTO): Promise<Result<FetchUserDTO>>
  {
    try {
      
      const updated = await this.userRepository.update(uuid, data)
      return Result.success(updated);

    } catch (error: any) {
     
      if (error.code === 'P2025') {
        return Result.error('USER_NOT_FOUND', 404);
      }

      return Result.error('INTERNAL_ERROR', 500);
    }
  }
}