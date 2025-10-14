import mongoose from "mongoose";
import { Schema } from "mongoose";

const someeschema = new Schema({
    id:{
        type : String,
        default : '0',
        required:true,
    },
    country:{
        type:String,
        default:'Pakisthan',
        required:true,
    },
    comtee:{
        type:String,
        default:'ISSI',
        required:true,
    },
    email : {
        type: String,
        default:'none',
        required: true,
    }, 
    name : {
        type: String,
        default:'none',
        required: true,
    },    
    status : {
        type : String,
        default:'none',
        required:true,
    }

},
{
    timestamps:true
});
const crntcomt = mongoose.models.commite || mongoose.model('commite',someeschema);

export default crntcomt;