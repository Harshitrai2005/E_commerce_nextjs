import mongoose from "mongoose";

export const connectDB=async()=>{

    if(mongoose.connection.readyState>=1){
        console.log("Already connected to database");
        return;
    }
    mongoose.connect("mongodb+srv://harshitrai2532005:9mLiPzeQoDSZEYN2@cluster0.rov7n.mongodb.net/",{

    
        dbName:"Next_js_ecommerce"
        }
    ).then(()=>{
            console.log("Database connected");
       } ).catch((err)=>{
            console.log(err);
        });
}