
import { Request , Response} from 'express';
import path from 'path';
import fs from 'fs'
export  default class FileController{
    static async FaceRef(req:Request, res:Response){
        const filePath = `../../storage/ref/${req.params.id}.png` ;
        const fullPath = path.join(__dirname, filePath);
        res.sendFile(fullPath) 
    }

    static async Facetest(req:Request, res:Response){
        const filePath = `../../storage/test/${req.params.id}.png` ;
        const fullPath = path.join(__dirname, filePath);
        res.sendFile(fullPath)  
        
    }
}