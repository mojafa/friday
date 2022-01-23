import express from 'express';
import ScheduleController from '../controllers/schedule.controller';


const router = express.Router();

router.post('/schedules/add/', ScheduleController.Create);
router.get('/schedules/', ScheduleController.Getall);
router.get('/schedules/schedule/:id', ScheduleController.Get);
router.get('/schedules/semester/:sem', ScheduleController.FindbySemister);

router.get('/schedules/remove/:id', ScheduleController.Remove);
router.post('/schedules/update/:id', ScheduleController.Update);

export default router;