const express = require("express");
const app = express();
const momgoose = require("mongoose");
const dotenv= require('dotenv')
const authRouter= require('./routers/auth')
const userRouter= require('./routers/user')
const productRouter=require('./routers/product')
const productOrder=require('./routers/order')
const productCart=require('./routers/cart')

dotenv.config()
app.use(express.json())

momgoose.connect(
  process.env.MONGO_URL
).then(()=>console.log('BD Connection Completed')).catch((err)=>console.log(err));

app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/order",productOrder)
app.use("/cart",productCart)


app.listen(process.env.PORT||5000, () => {
  console.log("back-end");
});
