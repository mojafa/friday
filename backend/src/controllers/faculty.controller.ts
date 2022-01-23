import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Faculty from '../models/faculty.model';

export default class FacultyController{
    public static async Create(req:Request, res:Response){
        let { name, code} = req.body;
        const faculty =new Faculty({
            _id: new mongoose.Types.ObjectId(),
            name,code
        })

        try {
            await faculty.save();
            return res.status(201).json(faculty);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const faculty = await Faculty.find().exec();
            if (!faculty) {
                return res.status(404).json({massege:'unknown faculty'});
            }
            res.status(200).json(faculty);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const faculty = await Faculty.findById(req.params.id).exec();
            if (!faculty) {
                return res.status(404).json({massege:'unknown faculty'});
            }
            res.status(200).json(faculty);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Remove(req:Request, res:Response){
        try {
            const faculty = await Faculty.remove({_id:req.params.id}).exec();
            if (!faculty) {
                return res.status(404).json({massege:'unknown faculty'});
            }
            res.status(200).json(faculty);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { name,code} = req.body;

        try {
            const faculty = await Faculty.updateOne({_id:req.params.id}, {$set: {
                name,code
            }}).exec();

            if (!faculty) {
                return res.status(404).json({massege:'unknown faculty'});
            }
            res.status(200).json(faculty);
        } catch (error) {
            res.status(500).json(error);
        }
    }


}
