import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Semester from '../models/semester.model';

export default class SemesterController{
    public static async Create(req:Request, res:Response){
        let { year,level,start,weeks,} = req.body;
        const semester =new Semester({
            _id: new mongoose.Types.ObjectId(),
            year,level,start,weeks
        })

        try {
            await semester.save();
            return res.status(201).json(semester);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const semester = await Semester.find().exec();
            if (!semester) {
                return res.status(404).json({massege:'unknown semester'});
            }
            res.status(200).json(semester);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const semester = await Semester.findById(req.params.id).exec();
            if (!semester) {
                return res.status(404).json({massege:'unknown semester'});
            }
            res.status(200).json(semester);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Remove(req:Request, res:Response){
        try {
            const semester = await Semester.remove({_id:req.params.id}).exec();
            if (!semester) {
                return res.status(404).json({massege:'unknown semester'});
            }
            res.status(200).json(semester);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { year,level,start,weeks,} = req.body;

        try {
            const semester = await Semester.updateOne({_id:req.params.id}, {$set: {
                year,level,start,weeks,
            }}).exec();

            if (!semester) {
                return res.status(404).json({massege:'unknown semester'});
            }
            res.status(200).json(semester);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
