import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import User from '../models/user.model';
import Staff from '../models/staff.model';
import Studnet from '../models/student.model'

export default class UserController{
    public static async Upload(req:Request, res:Response){
        let photo = req.file;
        try {
            const user = await User.updateOne({_id:req.params.userId}, {$set: {
                profilePhoto:photo,
            }}).exec();

            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }
    public static async ResetPwd(req:Request, res:Response){
        let pwd = req.body.pwd;
        try {
            const user = await User.updateOne({_id:req.params.userId}, {$set: { profilePhoto:pwd,}}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }
    public static async Create(req:Request, res:Response){
        let { lastName,firstName,email,  password,role,isActive } = req.body;
        const user =new User({
            _id: new mongoose.Types.ObjectId(),
            lastName,firstName,email, password,role,isActive
        })

        try {
            await user.save();
            return res.status(201).json(user);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    public static async Getall(req:Request, res:Response){
        try {
            const user = await User.find().exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json({
                users:user,
                count: user.length,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public static async GetStudents(req:Request, res:Response){
        try {
            const user = await User.find({role:'student'}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public static async GetAdmin(req:Request, res:Response){
        try {
            const user = await User.find({role:'admin'}).exec();            
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public static async GetStaff(req:Request, res:Response){
        try {
            const user = await User.find({role:'staff'}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public static async Get(req:Request, res:Response){
        try {
            const user = await User.findById(req.params.Id).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Find(req:Request, res:Response){
        try {
            const user = await User.findOne({phone:req.params.phone}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const user = await User.remove({_id:req.params.userId}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { name,email, phone, role,isActive} = req.body;

        try {
            const user = await User.updateOne({_id:req.params.userId}, {$set: {
                name,email, phone, role,isActive
            }}).exec();

            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Activation(req:Request, res:Response){
        let { isActive } = req.body;

        try {
            const user = await User.updateOne({_id:req.params.userId}, {$set: {
                isActive
            }}).exec();

            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
