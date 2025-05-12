import { IUserRepository } from "../repositories/IUserRepository";
import { StoreUserDTO } from "../dtos/StoreUserDTO";
import { Result } from "../../../shared/Result";
import { FetchUserDTO } from "../dtos/FetchUserDTO";
import { User } from "../entities/User";

export class StoreUser 
{
  constructor(private userRepository: IUserRepository) {}

  async execute(data: StoreUserDTO): Promise<Result<FetchUserDTO>> 
  {
    try {
      
      const user: User = new User(data);
      await user.encryptPassword();
      
      const result = await this.userRepository.store(user);
      return Result.success(result);

    } catch (error:any) {
      
      if (error.code === 'P2002') return Result.error('USER_ALREADY_EXISTS', 409);

      return Result.error('INTERNAL_ERROR', 500);
    }
  }
}
