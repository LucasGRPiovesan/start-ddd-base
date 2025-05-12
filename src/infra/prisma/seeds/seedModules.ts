import { PrismaClient } from '@prisma/client';

export async function seedModules(prisma: PrismaClient) {
  const modules = [
    {
      uuid: '26d8afb4-9092-4b4d-af86-1eb9b8446d54',
      module: 'Settings',
      description: 'System Settings',
    },
    {
      uuid: '5fd4cb81-8362-4ba1-905d-206d311c4e0f',
      uuid_module: '26d8afb4-9092-4b4d-af86-1eb9b8446d54',
      module: 'Profiles',
      description: 'System profile settings',
    },
    {
      uuid: 'af7d2bca-375e-4b58-b7d9-21ca308d5986',
      uuid_module: '26d8afb4-9092-4b4d-af86-1eb9b8446d54',
      module: 'Users',
      description: 'System user settings',
    },
  ];
  
  return prisma.module.createMany({ data: modules });
}
