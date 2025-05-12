// CreateUser.spec.ts
import { mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaUserRepository } from '../../../src/infra/repositories/PrismaUserRepository';
import { CreateUser } from '../../../src/core/user/use-cases/StoreUser';
import { randomUUID } from 'crypto';

describe('CreateUser', () => {
  const prismaMock = mockDeep<PrismaClient>();

  it('should create a new user', async () => {
    const mockUser = {
      uuid_profile: randomUUID(),
      name: 'John Doe',
      email: 'john@example.com'
    };

    prismaMock.user.create.mockResolvedValue(mockUser as any);

    const userRepository:PrismaUserRepository = new PrismaUserRepository(prismaMock);
    const createUser:CreateUser = new CreateUser(userRepository);

    const result = await createUser.execute({
      uuid_profile: mockUser.uuid_profile,
      name: mockUser.name,
      email: mockUser.email,
    });

    expect(result.name).toBe('John Doe');
    expect(result.email).toBe('john@example.com');
    expect(prismaMock.user.create).toHaveBeenCalled();
  });

  it('should throw an error if user already exists', async () => {
    prismaMock.user.create.mockRejectedValueOnce(new Error('User already exists'));

    const userRepository:PrismaUserRepository = new PrismaUserRepository(prismaMock);
    const createUser:CreateUser = new CreateUser(userRepository);

    await expect(
      createUser.execute({
        uuid_profile: randomUUID(),
        name: 'John Doe',
        email: 'john@example.com',
      })
    ).rejects.toThrow('User already exists');
  });
});
