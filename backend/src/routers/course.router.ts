import express from 'express';
import CourseController from '../controllers/course.controller';


const router = express.Router();

router.post('/courses/add/', CourseController.Create);
router.get('/courses/', CourseController.GetAll);

router.get('/courses/course/:id', CourseController.Get);
router.get('/courses/factly/:id', CourseController.GetAllFaculty);
router.get('/courses/remove/:id', CourseController.Remove);
router.post('/courses/update/:id', CourseController.Update);

export default router;