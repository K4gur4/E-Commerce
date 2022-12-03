import axios from "axios";

const BASE_URL="http://localhost:5000/"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accsessToken;
console.log("token",TOKEN);

export const publicRequest = axios.create(
    {
        baseURL:BASE_URL
    }
)

export const userRequest = axios.create(
    {
        baseURL:BASE_URL,
    }
)

export const cartRequest = axios.create(
    {
        baseURL:BASE_URL,
    }
)

export const orderRequest = axios.create(
    {
        baseURL:BASE_URL,
        header:{token:`Bearer ${TOKEN}`}
    }
)

