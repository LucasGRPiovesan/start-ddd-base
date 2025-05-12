import { Result } from "../../../shared/Result";
import { IUserRepository } from "../repositories/IUserRepository";

export class DeleteUser
{
  constructor(private userRepository: IUserRepository) {}

  async execute(uuid:string): Promise<Result<any>>
  {
    try {
      
      const deleted = await this.userRepository.delete(uuid)
      return Result.success(deleted);

    } catch (error: any) {
     
      if (error.code === 'P2025') {
        return Result.error('USER_NOT_FOUND', 404);
      }

      return Result.error('INTERNAL_ERROR', 500);
    }
  }
}