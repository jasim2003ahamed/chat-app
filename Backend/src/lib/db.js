import mongoose from "mongoose"

export const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb Connection Success")
    }
    catch (error)
    {
        console.log("MongoDb connection Error:",error)
    }
}