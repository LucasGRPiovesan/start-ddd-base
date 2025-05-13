// CreateUser.spec.ts
import { mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaUserRepository } from '../../../src/infra/repositories/PrismaUserRepository';
import { StoreUser } from '../../../src/core/user/use-cases/StoreUser';
import { randomUUID } from 'crypto';

describe('CreateUser', () => {
  const prismaMock = mockDeep<PrismaClient>();

  it('Should create a new user', async () => {
    const mockUser = {
      uuid_profile: randomUUID(),
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456'
    };

    prismaMock.user.create.mockResolvedValue(mockUser as any);

    const userRepository:PrismaUserRepository = new PrismaUserRepository(prismaMock);
    const createUser:StoreUser = new StoreUser(userRepository);

    const result = await createUser.execute({
      uuid_profile: mockUser.uuid_profile,
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
    });

    expect(result.data?.name).toBe('John Doe');
    expect(result.data?.email).toBe('john@example.com');
    expect(prismaMock.user.create).toHaveBeenCalled();
  });

  it('Should return error if user already exists', async () => {
    prismaMock.user.create.mockRejectedValueOnce({ code: 'P2002' });
  
    const userRepository = new PrismaUserRepository(prismaMock);
    const createUser = new StoreUser(userRepository);
  
    const result = await createUser.execute({
      uuid_profile: randomUUID(),
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456'
    });
  
    expect(result.isSuccess).toBe(false);
    expect(result.error).toBe('USER_ALREADY_EXISTS');
    expect(result.statusCode).toBe(409);
  });
  
});
