import { PrismaClient } from '@prisma/client';

export async function seedPermissions(prisma: PrismaClient) {
  const permissions = [
    {
      uuid: 'eb6fcc48-7d61-48df-842c-8e0634d91b53',
      permission: 'GET',
      label: 'Access',
      description: 'Permission to access and view records on module.',
    },
    {
      uuid: '79c5aef5-0422-4b07-baa3-4f406577847b',
      permission: 'POST',
      label: 'Register',
      description: 'Permission to post new registers on module.',
    },
    {
      uuid: '46d0aa20-7b28-48e5-9925-903d337b4a1d',
      permission: 'PATCH',
      label: 'Update',
      description: 'Permission to upadte registers on module.',
    },
    {
      uuid: 'f73c8e88-5e70-4800-8d19-886e9d31ef84',
      permission: 'DELETE',
      label: 'Delete',
      description: 'Permission to delete registers on module.',
    },
  ];
  
  return prisma.permission.createMany({ data: permissions });
}
