import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';

const prismaMock = mockDeep<PrismaClient>();

export default prismaMock;
export type PrismaMock = DeepMockProxy<PrismaClient>;
