import mongoose ,{Document , Schema} from 'mongoose';

export interface LectureInterface extends Document {
    staff:string;
    unit:string;
    start:string;
    time:number;
    day:string;
    schedule:string;
    
}

const lectureSchema: Schema = new Schema({
    staff: { type: String, required: true, },
    unit: { type: String, required: true, },
    start: { type: String, required: true, },
    time: { type: Number, required: true, },
    day: { type: String, required: true, },
    schedule: { type: String, required: true, },
}, {
    timestamps:true
});



export default mongoose.model<LectureInterface>('Lecture', lectureSchema);

