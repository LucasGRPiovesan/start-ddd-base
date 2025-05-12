import { Request, Response } from "express";
import { AuthService } from "../../auth/services/AuthService";

export class AuthController {

  public static async auth(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
    
      const result = await AuthService.authenticate(email, password);
      res.status(result.statusCode).json({ result }); 
    
    } catch (error:any) {

      res.status(401).json({ message: error.message });
    }
  }
}
