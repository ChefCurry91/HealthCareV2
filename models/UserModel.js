import mongoose from 'mongoose';


const UserSchemaHealthCareV2 = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
	},

	lastName: {
		type: String,
		trim: true,
	},

	email: {
		type: String,
		required: [true, 'Please provide email'],
	},

	password:{
		type: String,
	},

    role: {
        type:String,
        enum: ['user', 'admin'],
        default: 'user',
    },

	city: {
		type: String,
		//trim: true,
			
	},

	zipCode: {
		type: Number,
		//trim: true,
	},

	address: {
		type: String,
		//trim: true, 
	},
});

UserSchemaHealthCareV2.methods.toJSON = function() {
	let obj= this.toObject();
	delete obj.password;
	return obj;
}
export default mongoose.model('User', UserSchemaHealthCareV2);