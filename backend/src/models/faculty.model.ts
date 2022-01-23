import mongoose ,{Document , Schema} from 'mongoose';

export interface FacultyInterface extends Document {
    name:string;//'Scai'
    code:string;
   
    
}

interface FacultyDocument extends FacultyInterface, Document {
    
}

const facultySchema: Schema = new Schema({
    name: { type: String, required: true, },
    code: { type: String, required: true, },

}, {
    timestamps:true
});


export default mongoose.model<FacultyDocument>('Faculty', facultySchema);

