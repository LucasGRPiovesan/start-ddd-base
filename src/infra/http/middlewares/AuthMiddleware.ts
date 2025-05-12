import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtService } from '../../auth/services/JwtService';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {

  if (!req.headers.authorization) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  
  try {

    const token = req.headers.authorization?.split(' ')[1]; // Espera o token no formato "Bearer <token>"
  
    if (!token) {
      res.status(401).json({ message: 'Token not provided' });
      return;
    }

    JwtService.validateToken(token);

    next();

  } catch (error) {

    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;