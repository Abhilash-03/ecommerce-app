import mongoose from "mongoose";

const connectDB = async(URL) => {
   await mongoose.connect(URL)
    .then(() => {
        console.log('MongoDB connected successfully 🔥🚀')
    })
    .catch((error) => {
        console.log("DB error => ", error.message);
        process.exit(1);
    })
}

export default connectDB;