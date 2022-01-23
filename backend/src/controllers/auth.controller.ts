/// <reference path="../custom.d.ts" />

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { UserInterface } from '../models/user.model';
import { tokenSecrate } from '../config/app.config';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'



export default class AuthController {

    public static async SignUp(req: Request, res: Response) {


        let { firstName, lastName, email, password, } = req.body;
        if (!email.includes(".edu")) {
            res.status(400).json({ message: 'Please use your .edu addresss' });
            return;
        }

        const role = 'admin';
        const isActive = false;
        const profilePhoto = '/images/image_id/';

        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName, lastName, email, password, role, isActive, profilePhoto
        })

        try {
            await user.save();
            return res.status(201).json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    public static async SignIn(req: Request, res: Response) {
        try {
            const user: UserInterface | null = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({
                    massege: 'User not found',
                })
            }


            if(! await bcrypt.compare(req.body.password, user.password )){
                return res.status(400).json({
                    massege:'Invalid cridentils',
                })
            }



            if (!user.isActive) {
                return res.status(400).json({
                    massege: 'Activate Account to Login',
                })
            }

            jwt.sign({ email: user.email, role: user.role,id:user._id }, tokenSecrate, (token: any) => {
                return res.status(201).cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }).json({ status: "success", user: { name:user.firstName+' '+user.lastName, email: user.email, role: user.role, id:user._id } });
            });


        } catch (e) {
            return res.status(500).json(e);
        }


    }

    public static async SignOut(req: Request, res: Response) {
        res.cookie('jwt', '', {
            maxAge: 0
        });

        res.status(201).json({
            status: 'success',
        })
    }

    public static async Face (req: Request, res: Response) {
        if(!req.file){
            return res.status(400).json({
                massege: 'Error durring upload',
            });
        }
        const result = null;  //FaceRecognition(req.user);
        if(!result){
            return res.status(400).json({
                massege: 'Face does not match user',
            });
        }

        return res.status(201).json({
            status: 'success',
        })

    }


}
