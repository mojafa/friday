import express from 'express';
import FileController from '../controllers/files.controller';


const router = express.Router();

router.get('/files/images/refrence/:id', FileController.FaceRef);
router.get('/files/images/test/:id', FileController.Facetest);


export default router;