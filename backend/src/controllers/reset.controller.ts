import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import User from '../models/user.model';
import Reset from '../models/reset.model';

export default class ResetController{
    public static async Create(req:Request, res:Response){
        let { email } = req.body;

        try {
            const user = await User.findOne({email:email}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            let reset = await Reset.findOne({email:email}).exec();
            const token = '';
            const exp = '';
            if(!reset){
                reset =new Reset({_id: new mongoose.Types.ObjectId(), token,email,exp });
                await reset.save();
            }else{
                await Reset.updateOne({_id:reset._id}, {$set: {
                    token, exp,
                }}).exec();

            }
            res.status(200).json({state:'success'});
        } catch (error) {
            res.status(500).json(error);
        }
        

    }

    static async Remove(req:Request, res:Response){
        try {
            const reset = await Reset.remove({_id:req.params.Id}).exec();
            if (!reset) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(reset);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    

}
