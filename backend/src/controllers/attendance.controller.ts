import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Attendance from '../models/attendance.model';

export default class AttendanceController{
    public static async Create(req:Request, res:Response){
        
        let { schedule,student,qrcode,lecture,status } = req.body;
        const attendance =new Attendance({
            _id: new mongoose.Types.ObjectId(),
            schedule,student,qrcode,lecture,status 
        })

        try {
            await attendance.save();
            return res.status(201).json(attendance);
        } catch (e) {
            res.status(500).json(e);
        }

    }


    static async GetAllStudent(req:Request, res:Response){
        try {
            const student = await Attendance.find({student:req.params.Id}).exec();
            if (!student) {
                return res.status(404).json({massege:'not found attendance'});
            }
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async GetAllLecture(req:Request, res:Response){
        try {
            const attendance = await Attendance.find({lecture:req.params.Id}).exec();
            if (!attendance) {
                return res.status(404).json({massege:'not found attendance'});
            }
            res.status(200).json(attendance);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async GetAllLectureStudent(req:Request, res:Response){
        try {
            const attendance = await Attendance.find({lecture:req.params.lecture, student:req.params.student}).exec();
            if (!attendance) {
                return res.status(404).json({massege:'not found attendance'});
            }
            res.status(200).json(attendance);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }


}
