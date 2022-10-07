const express = require("express");
const app = express();
const momgoose = require("mongoose");
const dotenv= require('dotenv')
const authRouter= require('./routers/auth')
const userRouter= require('./routers/user')

dotenv.config()
app.use(express.json())

momgoose.connect(
  process.env.MONGO_URL
).then(()=>console.log('BD Connection Completed')).catch((err)=>console.log(err));

app.use("/auth",authRouter)
app.use("/user",userRouter)

app.listen(process.env.PORT||5000, () => {
  console.log("back-end");
});
