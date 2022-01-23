import express from 'express';
import FacultyController from '../controllers/faculty.controller';


const router = express.Router();

router.post('/faculties/add/', FacultyController.Create);
router.get('/faculties/', FacultyController.Getall);
router.get('/faculties/faculty/:id', FacultyController.Get);
router.get('/faculties/remove/:id', FacultyController.Remove);
router.post('/faculties/update/:id', FacultyController.Update);

export default router;