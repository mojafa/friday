import express from 'express';
import StaffController from '../controllers/staff.controller';


const router = express.Router();

router.post('/staff/add', StaffController.Create);
router.get('/staff/', StaffController.Getall);
router.get('/staff/staff/:id', StaffController.Get);
router.get('/staff/find/:id', StaffController.Find);
router.get('/staff/user/:id', StaffController.FindUser);

router.get('/staff/remove/:id', StaffController.Remove);
router.post('/staff/update/:id', StaffController.Update);

export default router;