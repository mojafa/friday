import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Staff from '../models/staff.model';
import User from '../models/user.model';

export default class StaffController{
    public static async Create(req:Request, res:Response){
        let {
            staffNumber, user,faculty,
        } = req.body;
        const staff =new Staff({
            _id: new mongoose.Types.ObjectId(),
            staffNumber,user,faculty,
        });

        

        try {
            await staff.save();
            return res.status(201).json(staff);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const staff = await Staff.find().exec();
            if (!staff) {
                return res.status(404).json({massege:'unknown staff'});
            }
            res.status(200).json({
                staffs:staff,
                count: staff.length,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const staff = await Staff.findById(req.params.id).exec();
            if (!staff) {
                return res.status(404).json({massege:'unknown staff'});
            }
            const user = await User.findById(staff.user).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            const _user ={
                fName:user.firstName,
                lastName:user.lastName,
                email:user.email,
            }
            res.status(200).json({staff:staff, user:_user});
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Find(req:Request, res:Response){
        try {
            const staff = await Staff.findOne({staffNumber:req.params.id}).exec();
            if (!staff) {
                return res.status(404).json({massege:'unknown staff'});
            }
            const user = await User.findById(staff.user).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            const _user ={
                fName:user.firstName,
                lastName:user.lastName,
                email:user.email,
            }
            res.status(200).json({staff:staff, user:_user});
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async FindUser(req:Request, res:Response){
        try {
            const staff = await Staff.findOne({user:req.params.id}).exec();
            if (!staff) {
                return res.status(404).json({massege:'unknown staff'});
            }
            const user = await User.findById(staff.user).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            const _user ={
                fName:user.firstName,
                lastName:user.lastName,
                email:user.email,
            }
            res.status(200).json({staff:staff, user:_user});
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const staff = await Staff.remove({_id:req.params.id}).exec();
            if (!staff) {
                return res.status(404).json({massege:'unknown staff'});
            }
            res.status(200).json(staff);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { staffNumber,faculty,} = req.body;

        try {
            const staff = await Staff.updateOne({_id:req.params.id}, {$set: {
                staffNumber,faculty,
            }}).exec();

            if (!staff) {
                return res.status(404).json({massege:'unknown staff'});
            }
            res.status(200).json(staff);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
