import mongoose ,{Document , Schema} from 'mongoose';

export interface StudnetCourseInterface extends Document {
    studnet:string;
    unit:string;
    semester:number;
}

const studnetCourseSchema: Schema = new Schema({
    studnet: { type: String, required: true, },
    unit: { type: String, required: true, },
    semester: { type: String, required: true, },
}, {
    timestamps:true
});



export default mongoose.model<StudnetCourseInterface>('StudnetCourse', studnetCourseSchema);

