import express from 'express';
import UserController from '../controllers/user.controller';


const router = express.Router();

router.post('/users/add/', UserController.Create);
router.get('/users/', UserController.Getall);
router.get('/users/staff', UserController.GetStaff);
router.get('/users/student', UserController.GetStudents);
router.get('/users/admin', UserController.GetAdmin);
router.get('/users/user/:id', UserController.Get);
router.get('/users/remove/:id', UserController.Remove);
router.post('/users/update/:id', UserController.Update);
router.get('/users/active/:id', UserController.Activation);

export default router;