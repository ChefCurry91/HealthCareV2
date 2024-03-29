import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Appointment from '../models/AppointmentModel.js';


export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user:userWithoutPassword });
};

export const getAppointmentStats = async (req, res) => {
    const users = await User.countDocuments();
    const appointments = await Appointment.countDocuments();
    res.status(StatusCodes.OK).json({ users, appointments });};

export const updateUser = async (req, res) => {
    const object = {... req.body };
    delete object.password;
    const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body);
    res.status(StatusCodes.OK).json({ msg: 'Update user' });
};