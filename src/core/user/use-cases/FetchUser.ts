import { FetchUserDTO } from '../dtos/FetchUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';
import { Result } from '../../../shared/Result';

export class FetchUser 
{
  constructor(private userRepository: IUserRepository) {}

  async execute(uuid:string): Promise<Result<FetchUserDTO>> 
  {
    const user = await this.userRepository.findUnique(uuid);

    if (!user) return Result.error('User not found!', 404);
    
    return Result.success(user);
  }
}
