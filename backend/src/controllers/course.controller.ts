import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Course from '../models/course.model';

export default class CourseController{
    public static async Create(req:Request, res:Response){
        let { name,faculty,code,year , semester } = req.body;
        const course =new Course({
            _id: new mongoose.Types.ObjectId(),
            name,faculty,code,year , semester
        })

        try {
            await course.save();
            return res.status(201).json(course);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async GetAll(req:Request, res:Response){
        try {
            const course = await Course.find().exec();
            if (!course) {
                return res.status(404).json({massege:'unknown course'});
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async GetAllFaculty(req:Request, res:Response){
        try {
            const course = await Course.find({faculty:req.params.faculty}).exec();
            if (!course) {
                return res.status(404).json({massege:'unknown course'});
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }
    
    static async Get(req:Request, res:Response){
        try {
            const course = await Course.findById(req.params.id).exec();
            if (!course) {
                return res.status(404).json({massege:'unknown course'});
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Remove(req:Request, res:Response){
        try {
            const course = await Course.remove({_id:req.params.id}).exec();
            if (!course) {
                return res.status(404).json({massege:'unknown course'});
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { name,faculty , code, year , semester} = req.body;

        try {
            const course = await Course.updateOne({_id:req.params.id}, {$set: {
                name,faculty,code,year , semester
            }}).exec();

            if (!course) {
                return res.status(404).json({massege:'unknown course'});
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json(error);
        }
    }


}
