import mongoose ,{Document , Schema} from 'mongoose';

export interface StaffInterface extends Document {
    staffNumber:string;
    user:string;
    faculty:string;
}

const staffSchema: Schema = new Schema({
    staffNumber: { type: String, required: true, unique:true},
    user: { type: String, required: true, unique:true},
    faculty: { type: String, required: true, },
}, {
    timestamps:true
});



export default mongoose.model<StaffInterface>('Staff', staffSchema);

