import express from 'express';
import QrcodeController from '../controllers/qrcode.controller';


const router = express.Router();

router.post('/qrcodes/add/', QrcodeController.Create);
router.get('/qrcodes/find/:id', QrcodeController.Find);
router.get('/qrcodes/qrcode/:id', QrcodeController.Get);
router.get('/qrcodes/remove/:id', QrcodeController.Remove);

export default router;