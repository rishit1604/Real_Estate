import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

mongoose.connect("mongodb+srv://Rishit164:rhu78743@real-estate.abdbenm.mongodb.net/?retryWrites=true&w=majority&appName=Real-Estate").then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(err);
});
const app = express();

app.listen(3000,() => {
    console.log("Started Server");
});

app.use(express.json());
app.use('/backend/user',userRouter);
app.use('/backend/auth',authRouter);


app.use((err,req,res,next)=>{

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,

    });
});