
import { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';
import { PrismaProfileRepository } from '../../../src/infra/repositories/PrismaProfileRepository';
import { CreateProfile } from '../../../src/core/profile/use-cases/CreateProfile';
import { CreateProfileDTO } from '../../../src/core/profile/dtos/CreateProfileDTO';

describe('CreateProfile', () => {
  const mockClient = mockDeep<PrismaClient>();

  it('Should create a new profile', async() => {
    const mockProfile:CreateProfileDTO  = {
      profile: 'Operator',
      description: 'Operator profile for Jest validation'
    };

    mockClient.profile.create.mockResolvedValue(mockProfile as any);

    const profileRepository:PrismaProfileRepository = new PrismaProfileRepository(mockClient);
    const createProfile:CreateProfile = new CreateProfile(profileRepository);

    const result = await createProfile.execute(mockProfile);

    expect(result.profile).toBe('Operator');
    expect(result.description).toBe('Operator profile for Jest validation');
    expect(mockClient.profile.create).toHaveBeenCalled();
  });

  it('Should throw an error if profile already exists', async () => {
    mockClient.profile.create.mockRejectedValueOnce(new Error('Profile already exists'));
    
    const profileRepository:PrismaProfileRepository = new PrismaProfileRepository(mockClient);
    const createProfile:CreateProfile = new CreateProfile(profileRepository);
    
    await expect(
      createProfile.execute({
        profile: 'Operator',
        description: 'Operator profile for Jest validation',
      })
    ).rejects.toThrow('Profile already exists');
  });
});
