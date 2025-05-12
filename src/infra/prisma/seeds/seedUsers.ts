import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function seedUsers(prisma: PrismaClient) {
  const users = [
    {
      uuid: crypto.randomUUID(),
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
      name: 'Lucas Piovesan',
      email: 'mail@example.com',
      password: await bcrypt.hash('123456', await bcrypt.genSalt(12))
    },
  ];
  
  return prisma.user.createMany({ data: users });
}
