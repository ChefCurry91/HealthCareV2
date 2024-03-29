import { body, param,validationResult } from 'express-validator';
import { BadRequestError, UnauthorizedError, NotFoundError } from '../errors/customErrors.js';
import Appointment from '../models/AppointmentModel.js';
import User from '../models/UserModel.js';

import mongoose from 'mongoose';


const withValidationErrors = (validateValues) => {
    return [
      validateValues,
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          const errorMessages = errors.array().map((error) => error.msg);
          if (errorMessages[0].startsWith('No Appointment')) {
            throw new NotFoundError(errorMessages);
          }
          if (errorMessages[0].startsWith('Not authorized')){
            throw new UnauthorizedError('Not authorized to access this route')
          }
          throw new BadRequestError(errorMessages);
        }
        next();
        },
    ];
};

export const validateAppointmentInput = withValidationErrors([
    body('dateAppointment').notEmpty().withMessage('Date is required'),
    body('timeAppointment').notEmpty().withMessage('Time is required'),
]);

export const validateIdParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if(!isValidId) throw new BadRequestError ('Invalid MongoDB id');
      const appointment = await Appointment.findById(value);
      if (!appointment) throw new NotFoundError( `No Appointment with id ${value}` );
      const isAdmin = req.user.role === 'admin';
      const isOwner = req.user.userId === appointment.createdBy.toString();
      if (!isAdmin && !isOwner)
      throw new UnauthorizedError('Not authorized to access this route');
    }),
]);

export const validateRegisterInput = withValidationErrors([
  body('firstName').notEmpty().withMessage('First Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('city').notEmpty().withMessage('City is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('zipCode')
    .notEmpty()
    .withMessage('Zip Code is required')
    .isLength({ min: 4, max: 4})
    .withMessage('Zip Code must be 4 digits'),
  body('address').notEmpty().withMessage('Address is required'),

]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('firstName').notEmpty().withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('Email already exists');
      }
    }),
  body('city').notEmpty().withMessage('City is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('zipCode')
    .notEmpty()
    .withMessage('Zip Code is required')
    .isLength({ min: 4, max: 4})
    .withMessage('Zip Code must be 4 digits'),
  body('address').notEmpty().withMessage('Address is required'),
]);