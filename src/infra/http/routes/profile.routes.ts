import { Router } from "express";
import { ProfileController } from '../controllers/ProfileController';

const router = Router();

router.get('/', ProfileController.list);
router.get('/:uuid', ProfileController.fetch);
router.post('/', ProfileController.store);
router.patch('/:uuid', ProfileController.update);
router.delete('/:uuid', ProfileController.delete);

export const ProfileRoutes = router;
