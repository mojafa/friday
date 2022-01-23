import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Unit from '../models/unit.model';

export default class UnitController{
    public static async Create(req:Request, res:Response){
        let { name,course ,code ,year , semester} = req.body;
        const unit =new Unit({
            _id: new mongoose.Types.ObjectId(),
            name,course,code,year , semester
        })

        try {
            await unit.save();
            return res.status(201).json(unit);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async FindAll(req:Request, res:Response){
        try {
            const course = await Unit.find({course:req.params.course, year:req.params.year,semester:req.params.semester}).exec();
            if (!course) {
                return res.status(404).json({massege:'unknown unit'});
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async GetAll(req:Request, res:Response){
        try {
            const unit = await Unit.find().exec();
            if (!unit) {
                return res.status(404).json({massege:'unknown unit'});
            }
            res.status(200).json(unit);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const unit = await Unit.findById(req.params.Id).exec();
            if (!unit) {
                return res.status(404).json({massege:'unknown unit'});
            }
            res.status(200).json(unit);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async GetAllCourse(req:Request, res:Response){
        try {
            const unit = await Unit.find({course:req.params.id}).exec();
            if (!unit) {
                return res.status(404).json({massege:'unknown unit'});
            }
            res.status(200).json(unit);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const unit = await Unit.remove({_id:req.params.id}).exec();
            if (!unit) {
                return res.status(404).json({massege:'unknown unit'});
            }
            res.status(200).json(unit);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { name,course,year, code, semester} = req.body;

        try {
            const unit = await Unit.updateOne({_id:req.params.id}, {$set: {
                name,course, year, semester,code
            }}).exec();

            if (!unit) {
                return res.status(404).json({massege:'unknown unit'});
            }
            res.status(200).json(unit);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
