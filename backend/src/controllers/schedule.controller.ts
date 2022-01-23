import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Schedule from '../models/schedule.model';


export default class ScheduleController{
    public static async Create(req:Request, res:Response){
        let { semester,name,} = req.body;
        const schedule =new Schedule({
            _id: new mongoose.Types.ObjectId(),
            semester,name,
        })

        try {
            await schedule.save();
            return res.status(201).json(schedule);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const schedule = await Schedule.find().exec();
            if (!schedule) {
                return res.status(404).json({massege:'unknown schedule'});
            }
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const schedule = await Schedule.findById(req.params.id).exec();
            if (!schedule) {
                return res.status(404).json({massege:'unknown schedule'});
            }
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async FindbySemister(req:Request, res:Response){
        try {
            const schedule = await Schedule.findOne({semester:req.params.sem}).exec();
            if (!schedule) {
                return res.status(404).json({massege:'unknown schedule'});
            }
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const schedule = await Schedule.remove({_id:req.params.id}).exec();
            if (!schedule) {
                return res.status(404).json({massege:'unknown schedule'});
            }
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { semester,name,} = req.body;

        try {
            const schedule = await Schedule.updateOne({_id:req.params.id}, {$set: {
                semester,name,
            }}).exec();

            if (!schedule) {
                return res.status(404).json({massege:'unknown schedule'});
            }
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
