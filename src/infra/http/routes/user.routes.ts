import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/', UserController.list);
router.get('/:uuid', UserController.fetch);
router.post('/', UserController.store);
router.patch('/:uuid', UserController.update);
router.delete('/:uuid', UserController.delete);

export const UserRoutes = router;
