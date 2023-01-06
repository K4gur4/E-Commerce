const express = require('express');
const app = express();
const momgoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routers/auth');
const userRouter = require('./routers/user');
const productRouter = require('./routers/product');
const productOrder = require('./routers/order');
const productCart = require('./routers/cart');
const cors = require('cors');
const configENV = require('./config');

dotenv.config();
app.use(express.json());
const url = configENV.MONGODB_URL;
momgoose
  .connect(url)
  .then(() => console.log('BD Connection Completed'))
  .catch((error) => console.log(error));
app.use(cors());
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', productOrder);
app.use('/cart', productCart);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
