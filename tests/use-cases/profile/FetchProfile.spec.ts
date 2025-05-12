import { PrismaClient } from "@prisma/client";
import { mockDeep } from "jest-mock-extended";
import { PrismaProfileRepository } from "../../../src/infra/repositories/PrismaProfileRepository";
import { FetchProfile } from "../../../src/core/profile/use-cases/FetchProfile";
import { randomUUID } from "crypto";
import { FetchProfileDTO } from "../../../src/core/profile/dtos/FetchProfileDTO";

describe('Fetch Profile', () => {
  const mockClient = mockDeep<PrismaClient>();

  it('Should find profile by uuid', async () => {
    const profileUUID = randomUUID();
  
    const mockProfile: FetchProfileDTO = {
      uuid: profileUUID,
      profile: 'Operator',
      description: 'Operator profile for Jest validation',
      created_at: new Date(),
    };
  
    mockClient.profile.findUnique.mockResolvedValue(mockProfile as any);
  
    const profileRepository: PrismaProfileRepository = new PrismaProfileRepository(mockClient);
    const fetchProfile: FetchProfile = new FetchProfile(profileRepository);
  
    const result = await fetchProfile.execute(profileUUID);
  
    expect(result!.uuid).toBe(profileUUID);
    expect(result!.profile).toBe('Operator');
    expect(result!.description).toBe('Operator profile for Jest validation');
    expect(mockClient.profile.findUnique).toHaveBeenCalled();
  });
});