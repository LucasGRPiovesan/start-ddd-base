import { PrismaClient } from '@prisma/client';

export async function seedModulePermissionsProfile(prisma: PrismaClient) {
  const modulesPermissionsProfile = [
    // Settings
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4507',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    // Settings - Profiles
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4508',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4509',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4510',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4511',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    // Settings - Users
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4512',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4513',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4514',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
    {
      uuid_module_permission: '1ee37a1b-90e4-45bc-881d-20efb45f4515',
      uuid_profile: 'b49b69b8-403c-4328-b262-87eb8ef0596d',
    },
  ];
  
  return prisma.modulePermissionProfile.createMany({ data: modulesPermissionsProfile });
}
