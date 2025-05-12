import { IProfileRepository } from "../../core/profile/repositories/IProfileRepository";
import { StoreProfileDTO } from "../../core/profile/dtos/StoreProfileDTO";
import { Profile } from "../../core/profile/entities/Profile";
// import prisma from "../prisma";
import { ListProfileDTO } from "../../core/profile/dtos/ListProfileDTO";
import { PrismaClient } from "@prisma/client";
import { FetchProfileDTO } from "../../core/profile/dtos/FetchProfileDTO";
import { UpdateProfileDTO } from "../../core/profile/dtos/UpdateProfileDTO";

export class PrismaProfileRepository implements IProfileRepository {

  constructor(private prisma: PrismaClient) {}
    
  async store(profile: Profile): Promise<FetchProfileDTO> {

    const result:any = await this.prisma.profile.create({ 
      data: profile.toStore()  
    });

    return {
      uuid: result.uuid,
      profile: result.profile,
      description: result.description
    } satisfies FetchProfileDTO;
  }

  async findAll(): Promise<ListProfileDTO[]> {
    
    const profiles:ListProfileDTO[] = await this.prisma.profile.findMany({
      select: {
        uuid: true,
        profile: true,
        description: true,
        created_at: true
      },
      where: {
        deleted_at: null
      }
    });

    return profiles;
  }

  async findUnique(uuid: string): Promise<FetchProfileDTO | null> {
    const profile = await this.prisma.profile.findUnique({
      select: {
        uuid: true,
        profile: true,
        description: true,
        created_at: true
      }, 
      where: { uuid } 
    });

    return profile;
  }

  async update(uuid:string, data: UpdateProfileDTO): Promise<FetchProfileDTO> {

    const result = await this.prisma.profile.update({
      where: { uuid },
      data
    });

    return {
      uuid: result.uuid,
      profile: result.profile,
      description: result.description
    } satisfies FetchProfileDTO;
  }

  async delete(uuid: string): Promise<any> {
    await this.prisma.profile.update({
      where: { uuid },
      data: { deleted_at: new Date() }
    });
  }
}
