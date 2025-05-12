import { PrismaClient } from '@prisma/client';

export async function seedProfiles(prisma: PrismaClient) {
  const profiles = [
    {
      uuid: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
      profile: 'Admin',
      description: 'Perfil administrativo',
    }
  ];
  
  return prisma.profile.createMany({ data: profiles });
}
