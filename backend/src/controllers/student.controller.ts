import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Student from '../models/student.model';
import User from '../models/user.model';


export default class StudentController{
    public static async Create(req:Request, res:Response){
        let {
            stdNumber,user,faculty,year, semester,schedule,
            groupName, course} = req.body;
        const student =new Student({
            _id: new mongoose.Types.ObjectId(),
            stdNumber,user,faculty,year,semester,schedule,course,
            groupName,
        });

        

        try {
            await student.save();
            return res.status(201).json(student);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const student = await Student.find().exec();
            if (!student) {
                return res.status(404).json({massege:'unknown student'});
            }
            res.status(200).json({
                students:student,
                count: student.length,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const student = await Student.findById(req.params.id).exec();
            if (!student) {
                return res.status(404).json({massege:'unknown student'});
            }
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

 

    static async Remove(req:Request, res:Response){
        try {
            const student = await Student.remove({_id:req.params.id}).exec();
            if (!student) {
                return res.status(404).json({massege:'unknown student'});
            }
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { stdNumber,school,semester,schedule,course,
            groupName,} = req.body;

        try {
            const student = await Student.updateOne({_id:req.params.id}, {$set: {
                stdNumber,school,semester,schedule, groupName,course 
            }}).exec();

            if (!student) {
                return res.status(404).json({massege:'unknown student'});
            }
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async FindUser(req:Request, res:Response){
        try {
            const student = await Student.findOne({user:req.params.id}).exec();
            if (!student) {
                return res.status(404).json({massege:'unknown student'});
            }
            const user = await User.findById(student.user).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            const _user ={
                fName:user.firstName,
                lastName:user.lastName,
                email:user.email,
            }
            res.status(200).json({student:student, user:_user});
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
