import { Request , Response} from 'express';

export default class FaceController{
    public static async Add (req: Request, res: Response) {
        if(!req.file){
            return res.status(400).json({
                massege: 'Error durring upload',
            });
        }

        return res.status(201).json({
            status: 'success',
        })
    }

    public static async Validate (req: Request, res: Response) {
        if(!req.file){
            return res.status(400).json({
                massege: 'Error durring upload',
            });
        }

        return res.status(201).json({
            status: 'success',
        })

    }
    


}
