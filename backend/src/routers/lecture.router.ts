import express from 'express';
import LectureController from '../controllers/lecture.controller';


const router = express.Router();

router.post('/lectures/add/', LectureController.Create);
router.get('/lectures/', LectureController.Getall);
router.get('/lectures/staff/:id', LectureController.FindStaff);
router.get('/lectures/unit/:id', LectureController.GetUnit);
router.get('/lectures/lecture/:id', LectureController.Get);

router.get('/lectures/remove/:id', LectureController.Remove);
router.post('/lectures/update/:id', LectureController.Update);

export default router;