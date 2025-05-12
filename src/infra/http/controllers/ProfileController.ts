// src/infra/http/controllers/UserController.ts
import { Request, Response } from "express";
import { ListProfiles } from "../../../core/profile/use-cases/ListProfiles";
import { PrismaProfileRepository } from "../../repositories/PrismaProfileRepository";
import prisma from "../../prisma";
import { FetchProfile } from "../../../core/profile/use-cases/FetchProfile";
import { StoreProfile } from "../../../core/profile/use-cases/StoreProfile";
import { UpdateProfile } from "../../../core/profile/use-cases/UpdateProfile";
import { DeleteProfile } from "../../../core/profile/use-cases/DeleteProfile";

const repository: PrismaProfileRepository = new PrismaProfileRepository(prisma);

export class ProfileController {

  public static async list(req: Request, res: Response): Promise<Response | any> {
    
    try {
      
      const useCase = new ListProfiles(repository);
      const profiles = await useCase.execute();
  
      return res.status(200).json(profiles);

    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }

  public static async fetch(req: Request, res: Response): Promise<Response | any> {

    try {

      const useCase = new FetchProfile(repository);
      const profile = await useCase.execute(req.params.uuid);

      return res.status(201).json(profile);
      
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

      const useCase = new StoreProfile(repository);
      const result = await useCase.execute(req.body);

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

  public static async update(req: Request, res: Response): Promise<Response | any> {

    try {

      const useCase = new UpdateProfile(repository);
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

      const useCase = new DeleteProfile(repository);
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
