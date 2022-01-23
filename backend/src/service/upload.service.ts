import multer from 'multer';
import path from 'path'
//add uui to backend 
export const  test = multer.diskStorage({
    destination: (req , file, cb) =>{
            cb(null, './storage/test')
    },
    filename:(req, file , cb) => {
        cb(null, file.originalname)
    }
});

export const  ref = multer.diskStorage({
    destination: (req , file, cb) =>{
            cb(null, './storage/ref')
    },
    filename:(req, file , cb) => {
        cb(null, file.originalname)
    }
});

//meme type
//server  the  files
