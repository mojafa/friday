import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Qrcode from '../models/qrcode.model';

export default class QrcodeController{
    public static async Create(req:Request, res:Response){
        let { generatedAt,uuid,generatedBy ,lesson, type  } = req.body;
        const qrcode =new Qrcode({
            _id: new mongoose.Types.ObjectId(),
            generatedAt,uuid,generatedBy, lesson, type
        })

        try {
            await qrcode.save();
            return res.status(201).json(qrcode);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Find(req:Request, res:Response){
        try {
            const qrcode = await Qrcode.find({lesson:req.params.id}).exec();
            if (!qrcode) {
                return res.status(404).json({massege:'qrcode not found'});
            }
            res.status(200).json(qrcode);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Get(req:Request, res:Response){
        try {
            const qrcode = await Qrcode.findById(req.params.Id).exec();
            if (!qrcode) {
                return res.status(404).json({massege:'unknown qrcode'});
            }
            res.status(200).json(qrcode);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }


    static async Remove(req:Request, res:Response){
        try {
            const qrcode = await Qrcode.remove({_id:req.params.Id}).exec();
            if (!qrcode) {
                return res.status(404).json({massege:'unknown qrcode'});
            }
            res.status(200).json(qrcode);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

}
