import { Router } from 'express';
const router = Router();

import {
  getCurrentUser,
  getAppointmentStats,
  updateUser,
} from '../controllers/userController.js';

import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats',
    authorizePermissions('admin'),
    getAppointmentStats);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;