
import { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';
import { PrismaProfileRepository } from '../../../src/infra/repositories/PrismaProfileRepository';
import { StoreProfile } from '../../../src/core/profile/use-cases/StoreProfile';
import { StoreProfileDTO } from '../../../src/core/profile/dtos/StoreProfileDTO';

describe('CreateProfile', () => {
  const mockClient = mockDeep<PrismaClient>();

  it('Should create a new profile', async() => {
    const mockProfile:StoreProfileDTO  = {
      profile: 'Operator',
      description: 'Operator profile for Jest validation'
    };

    mockClient.profile.create.mockResolvedValue(mockProfile as any);

    const profileRepository:PrismaProfileRepository = new PrismaProfileRepository(mockClient);
    const createProfile:StoreProfile = new StoreProfile(profileRepository);

    const result = await createProfile.execute(mockProfile);

    expect(result.data?.profile).toBe('Operator');
    expect(result.data?.description).toBe('Operator profile for Jest validation');
    expect(mockClient.profile.create).toHaveBeenCalled();
  });

  it('Should throw an error if profile already exists', async () => {
    mockClient.profile.create.mockRejectedValueOnce({ code: 'P2002' });
    
    const profileRepository:PrismaProfileRepository = new PrismaProfileRepository(mockClient);
    const createProfile:StoreProfile = new StoreProfile(profileRepository);

    const result = await createProfile.execute({
      profile: 'Operator',
      description: 'Operator profile for Jest validation',
    })
    
    expect(result.isSuccess).toBe(false);
    expect(result.error).toBe('USER_ALREADY_EXISTS');
    expect(result.statusCode).toBe(409);
  });
});
