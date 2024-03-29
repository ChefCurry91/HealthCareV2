import Appointment from '../models/AppointmentModel.js';
import { StatusCodes } from 'http-status-codes';

    
 export const getAllAppointments = async (req, res) => {
    console.log(req.user.userId )
    const appointments = await Appointment.find({ createdBy: req.user.userId });
    res.status(StatusCodes.OK).json({ appointments });
};

export const createAppointment = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const appointment = await Appointment.create(req.body);
    res.status(StatusCodes.CREATED).json({ appointment });

};

export const getSingleAppointment = async (req, res) => {
    const appointment = await Appointment.findById(req.params.id);
    res.status(StatusCodes.OK).json({ appointment });
};
    
export const deleteAppointment = async (req, res) => {
    const removedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: 'Appointment deleted', appointment: removedAppointment });
};