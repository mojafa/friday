import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Lesson from '../models/lesson.model';
import Lecture from '../models/lecture.model';

export default class LessionController{
    public static async Create(req:Request, res:Response){
        let { schedule,lecture,title,day , location, state } = req.body;
        const lesson =new Lesson({
            _id: new mongoose.Types.ObjectId(),
            schedule,lecture,title,day , location, state 
        })

        try {
            await lesson.save();
            return res.status(201).json(lesson);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async GetAll(req:Request, res:Response){
        try {
            const lesson = await Lesson.find().exec();
            if (!lesson) {
                return res.status(404).json({massege:'unknown lesson'});
            }
            
            res.status(200).json(lesson);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const lesson = await Lesson.findById(req.params.Id).exec();
            if (!lesson) {
                return res.status(404).json({massege:'unknown lesson'});
            }
            
            const lecture = await Lecture.findById(lesson.lecture).exec();
            if (!lecture) {
                return res.status(404).json({massege:'unknown lecture'});
            }
            res.status(200).json({lesson:lesson, lecture:lecture});
        } catch (error) {
            res.status(500).json(error);
        }  
    }

    static async FindAll(req:Request, res:Response){
        try {
            const lesson = await Lesson.find({lecture:req.params.id, day:req.params.day}).exec();
            if (!lesson) {
                return res.status(404).json({massege:'unknown lesson'});
            }
            res.status(200).json(lesson);
        } catch (error) {
            res.status(500).json(error);
        }  
    }

    static async Remove(req:Request, res:Response){
        try {
            const lesson = await Lesson.remove({_id:req.params.id}).exec();
            if (!lesson) {
                return res.status(404).json({massege:'unknown lesson'});
            }
            res.status(200).json(lesson);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { schedule,lecture,title,day , location, state } = req.body;

        try {
            const lesson = await Lesson.updateOne({_id:req.params.id}, {$set: {
                schedule,lecture,title,day , location, state 
            }}).exec();

            if (!lesson) {
                return res.status(404).json({massege:'unknown lesson'});
            }
            res.status(200).json(lesson);
        } catch (error) {
            res.status(500).json(error);
        }
    }


}
