import mongoose from "mongoose";
import { Schema } from "mongoose";

const someeschema = new Schema({
    
    slideno:{
        type : String,
        default : '0',
        required:true,
    },
    imgurl:{
        type : String,
        default : '0',
        required:true,
    },
    title:{
        type : String,
        default : 'title',
        required:true,
    },
    description:{
        type : String,
        default : 'description',
        required:true,
    },

},
{
    timestamps:true
});
const slideshow = mongoose.models.slides || mongoose.model('slides',someeschema);

export default slideshow;