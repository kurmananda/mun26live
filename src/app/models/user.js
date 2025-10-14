import mongoose from "mongoose";
import { Schema } from "mongoose";

const someschema = new Schema({
    id:{
        type:String,
        default:'hi',
        required:true,
    },
    email : {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required : true,
    },
    role:{
        type: String,
        required: true,
        default: 'user',
    },
    bioo:{
        type: String,
        default: 'I am excited to be involved in this',
        trim:true,
    },
    mobile:{
        type: String,
        default:'0000000000',
        trim:true,
    },
    college:{
        type: String,
        default:'your college',
        trim:true,
    },
    country:{
        type: String,
        default:'none',
        trim:true,
    },
    comt:{
        type: String,
        default:'none',
        trim:true,
    },
    status:{
        type: String,
        default : 'A country has not been chosen yet',
        trim: true,
    }

},
{
    timestamps:true
});
const crntuser = mongoose.models.kurmi || mongoose.model('kurmi',someschema);

export default crntuser;