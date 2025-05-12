import jwt from "jsonwebtoken";
import { FetchUserDTO } from "../../../core/user/dtos/FetchUserDTO";

export class JwtService {
  
  static secretKey:string = process.env.JWT_SECRET || 'default_c83102fbd1e08b9f2ba44a5c4fdd9214bc41bcd09dde31d4cb5392351b8ebebd';

  generateToken(user: FetchUserDTO): string {
    const payload = {
      email: user.email,
      password: user.password,
    };

    return jwt.sign(payload, JwtService.secretKey, { expiresIn: "1h" });
  }

  public static validateToken(token: string): any {

    try {

      return jwt.verify(token, JwtService.secretKey);

    } catch (error) {

      throw new Error("Invalid or expired token");
    }
  }
}
