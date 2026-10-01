import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
  //erpress error handle
  app.on("error",(error)=>{
console.log("ERR: Express failed to communicate with DB", error);
            throw error;
  })

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port: ${process.env.PORT || 8000`);
    
})

    console.log("db connection to server  successfully")
})
.catch((error)=>{
console.log("db connection failed ",error)
});