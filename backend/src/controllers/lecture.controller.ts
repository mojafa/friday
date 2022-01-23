import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Lecture from '../models/lecture.model';
import Unit from '../models/unit.model';

export default class LectureController{
    public static async Create(req:Request, res:Response){
        let { staff , unit, start,time,day,schedule} = req.body;
        const lecture =new Lecture({
            _id: new mongoose.Types.ObjectId(),
            staff , unit, start,time,day,schedule})

        try {
            await lecture.save();
            return res.status(201).json(lecture);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const lecture = await Lecture.find().exec();
            if (!lecture) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            res.status(200).json({
                lectures:lecture,
                count: lecture.length,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async FindStaff(req:Request, res:Response){
        try {
            const lecture = await Lecture.find({staff:req.params.id}).exec();
            if (!lecture ) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            

            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const lecture = await Lecture.findById(req.params.id).exec();
            if (!lecture) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async GetUnit(req:Request, res:Response){
        try {
            const lecture = await Lecture.findOne({unit:req.params.unit}).exec();
            if (!lecture) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const lecture = await Lecture.remove({_id:req.params.id}).exec();
            if (!lecture) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let {  staff , unit, start,time,day,schedule} = req.body;

        try {
            const lecture = await Lecture.updateOne({_id:req.params.id}, {$set: {
                staff , unit, start,time,day,schedule
            }}).exec();

            if (!lecture) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
