import mongoose ,{Document , Schema} from 'mongoose';

export interface SemesterInterface extends Document {
    year:string;
    level:string;
    start:Date;
    weeks: number;    
}

const semesterSchema: Schema = new Schema({
    year: { type: String, required: true, },
    level: { type: String, required: true,},
    start: { type: Date, required: true, },
    weeks: { type: Number, required: true, },
}, {
    timestamps:true
});



export default mongoose.model<SemesterInterface>('Semester', semesterSchema);

