import { StatusCodes } from 'http-status-codes';
import UserHealthCareV2 from '../models/UserModel.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';

export const register = async (req, res) => {
    const isFirstAccount = (await UserHealthCareV2.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashedPassword;

    const user = await UserHealthCareV2.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: 'User created' });
};

export const login = async (req, res) => {
    const user = await UserHealthCareV2.findOne({ email: req.body.email });
    
    const isValidUser = 
        user && await comparePassword(req.body.password,user.password)
    if (!isValidUser) throw new UnauthenticatedError('Invalid credentials');

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly:true,
        expires: new Date(Date.now()+oneDay),
        secure: process.env.NODE_ENV === 'production',
    });

    res.status(StatusCodes.CREATED).json({ msg: 'user logged in' });

};

