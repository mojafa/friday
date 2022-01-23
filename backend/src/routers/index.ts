import { Application} from 'express';

import User from './user.router';
import Staff from './staff.router';
import Student from './student.router';
import Semester from './semester.router';
import Unit from './unit.router';
import Lesson from './lesson.router';
import Face from './face.router';
import Files from './file.router'



import Faculty from './faculty.router';
import Course from './course.router';
import Lecture from './lecture.router';
import Qrcode from './qrcode.router';
import Schedule from './schedule.router';
import Auth from './auth.router';


export default (app:Application)=>{
    app.use('/api',User);
    app.use('/api',Lesson);
    app.use('/api',Face);
    app.use('/api',Files);
    app.use('/api',Staff);
    app.use('/api',Student);
    app.use('/api',Faculty);
    app.use('/api',Unit);
    app.use('/api',Course);
    app.use('/api',Lecture);
    app.use('/api',Qrcode);
    app.use('/api', Schedule);
    app.use('/api', Semester);
    app.use('/api',Auth);
    app.get('/', (req , res)=>{

        res.send('working Well')
    })
  
}