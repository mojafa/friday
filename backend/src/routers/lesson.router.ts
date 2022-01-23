import express from 'express';
import LessonController from '../controllers/lesson.controller';


const router = express.Router();

router.post('/lessons/add/', LessonController.Create);
router.get('/lessons/', LessonController.GetAll);

router.get('/lessons/find/:id/:day', LessonController.FindAll);


router.get('/lessons/remove/:id', LessonController.Remove);
router.post('/lessons/update/:id', LessonController.Update);

export default router;