import mongoose ,{Document , Schema} from 'mongoose';

export interface StudentInterface extends Document {
    stdNumber:string;
    user:string;
    faculty:string;
    year:number;
    semester:string;
    schedule:string;
    groupName:string;
    course:string;
}

const studentSchema: Schema = new Schema({
    stdNumber: { type: String, required: true, unique:true},
    user: { type: String, required: true, unique:true},
    faculty: { type: String, required: true, },
    year: {type: Number , required:true , default:1},
    semester: { type: String, default:'' },
    schedule: { type: String, default:'' },
    groupName: { type: String, required: true, },
    course: { type: String, default:'' },
}, {
    timestamps:true
});



export default mongoose.model<StudentInterface>('Student', studentSchema);

