import { PrismaUserRepository } from "../../repositories/PrismaUserRepository";
import { JwtService } from "./JwtService";
import prisma from "../../prisma";
import { Result } from "../../../shared/Result";
import bcrypt from 'bcrypt';

export class AuthService {

  static userRepository: PrismaUserRepository = new PrismaUserRepository(prisma);
  static jwtService: JwtService = new JwtService();

  static async authenticate(email: string, password: string): Promise<Result<any>> {
    const user = await AuthService.userRepository.findByEmail(email);
    if (!user) return Result.error('User not found!', 404);

    const passwordCheck = await bcrypt.compare(password, user.password as string);
    if (!passwordCheck) return Result.error('Invalid Password!', 401);

    return Result.success({ token: this.jwtService.generateToken(user) }, 200);
  }
}
