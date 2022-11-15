import axios from "axios";

const BASE_URL="http://localhost:5000/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg0OWRmOTZmNDViZmUyOGE4ZDQ5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODUwMjU3MywiZXhwIjoxNjY4NTg4OTczfQ.Gk15y-Z4VzfHfhmLsFdSE5kBNl8uwYLDqTJUihEhLBs"

export const publicRequest = axios.create(
    {
        baseURL:BASE_URL
    }
)

export const userRequest = axios.create(
    {
        baseURL:BASE_URL,
        header:{token:`Bearer ${TOKEN}`}
    }
)