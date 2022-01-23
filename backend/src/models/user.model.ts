import mongoose ,{Document , Schema} from 'mongoose';
import bcrypt from "bcrypt";


export interface UserInterface extends Document {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role:string;
    isActive:boolean;
    profilePhoto:string;
}

const userSchema: Schema = new Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    email: { type: String, required: true, unique:true},
    role: { type: String, required: true, default: '--' },
    isActive: { type: Boolean, required: true, default: true },
    profilePhoto:{ type: String, required: true, default: '/image/test/' },
    password: { type: String, required: true, },
}, {
    timestamps:true
});
//displays fullName
userSchema.virtual("fullName").get(function (this: UserInterface) {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.pre(
  "save",
  async function (this: UserInterface, next) {
    if (!this.isModified("password")) return next();

    // Random additional data
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hashSync(this.password, salt);

    // Replace the password with the hash
    this.password = hash;

    return next();
  }
);


export default mongoose.model<UserInterface>('User', userSchema);

