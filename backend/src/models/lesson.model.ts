import mongoose ,{Document , Schema} from 'mongoose';

export interface LessonInterface extends Document {
    schedule:string;
    lecture:string;
    title:string;
    day:Date;
    location:number;
    state:number;
    
}

const lessonSchema: Schema = new Schema({
    schedule: { type: String, required: true, },
    lecture: { type: String, required: true, },
    title: { type: String, required: true, },
    day: { type: String, required: true, },
    location:{type: Number, required: true, default:0},
    state: { type: Number, required: true, default:1 },

}, {
    timestamps:true
});


export default mongoose.model<LessonInterface>('Lesson', lessonSchema);

