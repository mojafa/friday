import mongoose ,{Document , Schema} from 'mongoose';

export interface UnitInterface extends Document {
    course:string;
    name:string;
    year:number;
    code:string;
    semester:number;
    
}

const unitSchema: Schema = new Schema({
    course: { type: String, required: true,},
    name: { type: String, required: true,},
    year: { type: Number, required: true, },
    code:{ type: String, required: true, },
    semester: { type: Number, required: true, },
    //code//
}, {
    timestamps:true
});



export default mongoose.model<UnitInterface>('Unit', unitSchema);
