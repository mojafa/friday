import express from 'express';
import StudentController from '../controllers/student.controller';


const router = express.Router();

router.post('/students/add/', StudentController.Create);
router.get('/students/', StudentController.Getall);
router.get('/students/student/:id', StudentController.Get);
router.get('/students/user/:id', StudentController.FindUser);
router.get('/students/remove/:id', StudentController.Remove);
router.post('/students/update/:id', StudentController.Update);

export default router;