import mongoose ,{Document , Schema} from 'mongoose';

export interface ResetInterface extends Document {
    token:string;
    email:string;    
    exp:Date; 
}

const resetSchema: Schema = new Schema({
    token: { type: String, required: true, unique:true},
    email: { type: String, required: true, unique:true},
    exp: { type: Date, required: true, },
}, {
    timestamps:true
});



export default mongoose.model<ResetInterface>('Reset', resetSchema);

