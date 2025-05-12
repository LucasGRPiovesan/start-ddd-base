import { PrismaClient } from '@prisma/client';

export async function seedModulePermissions(prisma: PrismaClient) {
  const modulesPermissions = [
    // Settings
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4507',
      uuid_module: '26d8afb4-9092-4b4d-af86-1eb9b8446d54',
      uuid_permission: 'eb6fcc48-7d61-48df-842c-8e0634d91b53',
    },
    // Settings - Profiles
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4508',
      uuid_module: '5fd4cb81-8362-4ba1-905d-206d311c4e0f',
      uuid_permission: 'eb6fcc48-7d61-48df-842c-8e0634d91b53',
    },
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4509',
      uuid_module: '5fd4cb81-8362-4ba1-905d-206d311c4e0f',
      uuid_permission: '79c5aef5-0422-4b07-baa3-4f406577847b',
    },
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4510',
      uuid_module: '5fd4cb81-8362-4ba1-905d-206d311c4e0f',
      uuid_permission: '46d0aa20-7b28-48e5-9925-903d337b4a1d',
    },
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4511',
      uuid_module: '5fd4cb81-8362-4ba1-905d-206d311c4e0f',
      uuid_permission: 'f73c8e88-5e70-4800-8d19-886e9d31ef84',
    },
    // Settings - Users
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4512',
      uuid_module: 'af7d2bca-375e-4b58-b7d9-21ca308d5986',
      uuid_permission: 'eb6fcc48-7d61-48df-842c-8e0634d91b53',
    },
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4513',
      uuid_module: 'af7d2bca-375e-4b58-b7d9-21ca308d5986',
      uuid_permission: '79c5aef5-0422-4b07-baa3-4f406577847b',
    },
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4514',
      uuid_module: 'af7d2bca-375e-4b58-b7d9-21ca308d5986',
      uuid_permission: '46d0aa20-7b28-48e5-9925-903d337b4a1d',
    },
    {
      uuid: '1ee37a1b-90e4-45bc-881d-20efb45f4515',
      uuid_module: 'af7d2bca-375e-4b58-b7d9-21ca308d5986',
      uuid_permission: 'f73c8e88-5e70-4800-8d19-886e9d31ef84',
    },
  ];
  
  return prisma.modulePermission.createMany({ data: modulesPermissions });
}
