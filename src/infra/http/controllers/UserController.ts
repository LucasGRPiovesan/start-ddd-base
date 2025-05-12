// src/infra/http/controllers/UserController.ts
import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/PrismaUserRepository";
import { StoreUser } from "../../../core/user/use-cases/StoreUser";
import { ListUsers } from "../../../core/user/use-cases/ListUser";
import prisma from "../../prisma";
import { FetchUser } from "../../../core/user/use-cases/FetchUser";
import { UpdateUser } from "../../../core/user/use-cases/UpdateUser";
import { DeleteUser } from "../../../core/user/use-cases/DeleteUser";

const repository: PrismaUserRepository = new PrismaUserRepository(prisma);

export class UserController {

  public static async list(req: Request, res: Response): Promise<Response | any> {
    
    try {
      
      const useCase = new ListUsers(repository);
      const users = await useCase.execute();
  
      return res.status(200).json(users);

    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }

  public static async fetch(req: Request, res: Response): Promise<Response | any>
  {
    try {
      
      const useCase = new FetchUser(repository);
      const result = await useCase.execute(req.params.uuid);

      if (!result.isSuccess) return res.status(404).json({ error: result.error });
  
      return res.status(200).json(result);

    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }

  public static async store(req: Request, res: Response): Promise<Response | any> {

    try {

      const useCase = new StoreUser(repository);
      const result = await useCase.execute(req.body);

      if (!result.isSuccess) return res.status(404).json({ error: result.error });

      return res.status(200).json(result);
      
    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }

  public static async update(req: Request, res: Response): Promise<Response | any> {

    try {

      const useCase = new UpdateUser(repository);
      const result = await useCase.execute(req.params.uuid, req.body);

      if (!result.isSuccess) return res.status(result.statusCode).json({ error: result.error });

      return res.status(200).json(result);
      
    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }

  public static async delete(req: Request, res: Response): Promise<Response | any> {

    try {

      const useCase = new DeleteUser(repository);
      const result = await useCase.execute(req.params.uuid);

      if (!result.isSuccess) return res.status(result.statusCode).json({ error: result.error });

      return res.status(200).json(result);
      
    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }
}
