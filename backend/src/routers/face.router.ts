import express from 'express';
import FaceController from '../controllers/face.controller';
import {ref , test} from '../service/upload.service';
import multer from 'multer';
import path from 'path'

function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
    const filetypes = /jpg|jpeg|png/ // Choose Types you want...
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
  
    if (extname && mimetype) {
      return cb(null, true)
    } else {
      //cb('Images only!') // custom this message to fit your needs
    }
  }

const add = multer({
    storage:ref,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
    },
  })

  const verify = multer({
    storage:test,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
    },
  })




const router = express.Router();

router.post('/faces/add/',add.single('image'), FaceController.Add);
router.post('/faces/verify',verify.single('image'),  FaceController.Validate);

export default router;