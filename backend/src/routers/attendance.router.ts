import express from 'express';
import AttendanceController from '../controllers/attendance.controller';


const router = express.Router();

router.post('/attendance/create/', AttendanceController.Create);
router.get('/attendance/student/:id', AttendanceController.GetAllStudent);
router.get('/attendance/lecture/:id', AttendanceController.GetAllLecture);
router.get('/attendance/:lecture/:student', AttendanceController.GetAllLectureStudent);

export default router;