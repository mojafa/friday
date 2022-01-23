import mongoose, { Document, Schema } from 'mongoose';

export interface QrcodeInterface extends Document {
    lesson: string
    generatedAt: Date;
    generatedBy: string;
    uuid: string;
    type: number;
}

const qrcodeSchema: Schema = new Schema({
    generatedAt: { type: Date, required: true, },
    uuid: { type: String, required: true, },
    generatedBy: { type: String, required: true, },
    lesson: { type: String, required: true, },
    type: { type: Number, required: true, },

}, {
    timestamps: true
});



export default mongoose.model<QrcodeInterface>('Qrcode', qrcodeSchema);

