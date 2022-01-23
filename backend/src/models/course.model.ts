import mongoose ,{Document , Schema} from 'mongoose';

export interface CourseInterface extends Document {
    name:string;
    faculty:string;
    code:string;
    year:number;
    semester:number;
}

const courseSchema: Schema = new Schema({
    name: { type: String, required: true, },
    code: { type: String, required: true, },
    faculty: { type: String, required: true, },
    year: { type: Number, required: true, },
    semester: { type: Number, required: true, },
}, {
    timestamps:true
});



export default mongoose.model<CourseInterface>('Course', courseSchema);

