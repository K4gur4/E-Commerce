require('dotenv').config();
const MONGODB_URL =
	process.env.NODE_ENV === 'test' ? process.env.TEST_MONGO_URL : process.env.NODE_ENV === 'dev' ? process.env.DEV_MONGO_URL: process.env.MONGO_URL;
module.exports={
    MONGODB_URL
}