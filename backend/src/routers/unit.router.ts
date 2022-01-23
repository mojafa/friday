import express from 'express';
import UnitController from '../controllers/unit.controller';


const router = express.Router();

router.post('/units/add/', UnitController.Create);
router.get('/units/', UnitController.GetAll);
router.get('/units/unit/:id', UnitController.GetAllCourse);
router.get('/units/remove/:id', UnitController.Remove);
router.post('/units/update/:id', UnitController.Update);
router.post('/units/find', UnitController.FindAll);

export default router;