import { Router } from "express";
const router = Router();

import {
    getAllAppointments,
    getSingleAppointment,
    createAppointment,
    deleteAppointment
} from '../controllers/appointmentsController.js';

import { validateAppointmentInput } from '../middleware/validationMiddleware.js';
import { validateIdParam } from '../middleware/validationMiddleware.js';



router.route('/').get(getAllAppointments).post(validateAppointmentInput, createAppointment);
router
    .route('/:id')
    .get(validateIdParam, getSingleAppointment)
    .delete(validateIdParam, deleteAppointment);

export default router;