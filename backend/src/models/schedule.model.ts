import mongoose ,{Document , Schema} from 'mongoose';

export interface ScheduleInterface extends Document {
    semester:string;
    name:string;
 
    
}

const scheduleSchema: Schema = new Schema({
    semester: { type: String, required: true, },
    name: { type: String, required: true, },

}, {
    timestamps:true
});



export default mongoose.model<ScheduleInterface>('Schedule', scheduleSchema);

