import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    title:{type:String,require:true},
    imgSrc:{type:String,require:true},
    price:{type:String,require:true},

},
{
    timestamps:true
})

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);