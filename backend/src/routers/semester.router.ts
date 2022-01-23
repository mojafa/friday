import express from 'express';
import SemesterController from '../controllers/semester.controller';


const router = express.Router();

router.post('/semesters/add/', SemesterController.Create);
router.get('/semesters/', SemesterController.Getall);
router.get('/semesters/semester/:id', SemesterController.Get);
router.get('/semesters/remove/:id', SemesterController.Remove);
router.post('/semesters/update/:id', SemesterController.Update);

export default router;