import mongoose ,{Document , Schema} from 'mongoose';

export interface AttendanceInterface extends Document {
    schedule:string;
    student:string;
    qrcode:string;
    lecture:string;
    stutus:string;
    
}

const studnetSchema: Schema = new Schema({
    schedule: { type: String, required: true,},
    student: { type: String, required: true, },
    timeIn: { type: String, required: true, },
    qrcodeIn: { type: String, required: true, },
    timeOut: { type: String, required: true, },
    qrcodeOut: { type: String, required: true, },
    lecture: {type: String, required: true,},
    status: { type: String, required: true, },
    
}, {
    timestamps:true
});



export default mongoose.model<AttendanceInterface>('Attendance', studnetSchema);


