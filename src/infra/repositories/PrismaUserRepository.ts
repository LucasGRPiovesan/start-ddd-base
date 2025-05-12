import { IUserRepository } from "../../core/user/repositories/IUserRepository";
import { StoreUserDTO } from "../../core/user/dtos/StoreUserDTO";
import { User } from "../../core/user/entities/User";
import { ListUserDTO } from "../../core/user/dtos/ListUsersDTO";
import { PrismaClient } from "@prisma/client";
import { FetchUserDTO } from "../../core/user/dtos/FetchUserDTO";
import { UpdateUserDTO } from "../../core/user/dtos/UpdateUserDTO";

export class PrismaUserRepository implements IUserRepository {

  constructor(private prisma: PrismaClient) {}
    
  async store(user: User): Promise<FetchUserDTO> {
    
    const result = await this.prisma.user.create({
      data: user.toStore()
    });

    return {
      uuid: result.uuid,
      name: result.name,
      email: result.email
    } satisfies FetchUserDTO;
  }

  async findAll(): Promise<ListUserDTO[]> {
    const users:any[] = await this.prisma.user.findMany({
      select: {
        uuid: true,
        name: true,
        email: true,
        profile: {
          select: {
            uuid: true,
            profile: true,
            description: true,
          }
        }
      },
      where: {
        deleted_at: null
      }
    });
    
    return users;
  }

  async findUnique(uuid: string): Promise<FetchUserDTO | null> {
    const user = await this.prisma.user.findUnique({
      select: {
        uuid: true,
        name: true,
        email: true,
      }, 
      where: { uuid } 
    });
    
    return user;
  }

  async findByEmail(email: string): Promise<FetchUserDTO | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(uuid:string, data: UpdateUserDTO): Promise<FetchUserDTO> {

    const result = await this.prisma.user.update({
      where: { uuid },
      data
    });

    return {
      uuid: result.uuid,
      name: result.name,
      email: result.email
    } satisfies FetchUserDTO;
  }

  async delete(uuid: string): Promise<any> {
    await this.prisma.user.update({
      where: { uuid },
      data: { deleted_at: new Date() }
    });
  }
}
