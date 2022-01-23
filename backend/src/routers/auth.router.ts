import express from 'express';
import AuthController from '../controllers/auth.controller'

const router = express.Router();

router.post('/auth/signin', AuthController.SignIn);
router.get('/auth/signout', AuthController.SignOut);
router.post('/auth/signup', AuthController.SignUp);


export default router;