import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
	
	dateAppointment: {
		type: Date,
		required: [true, 'Please provide date'],
	},

	timeAppointment: {
		type: String,
		required: [true, 'Please provide time'],
	},

	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: 'UserHealthCareV2',
	},
},
{ timestamps:true }

);

export default mongoose.model('Appointment', AppointmentSchema);