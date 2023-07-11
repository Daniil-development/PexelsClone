import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {"Authorization" : process.env.REACT_APP_API_KEY}
})
console.log(process.env.REACT_APP_API_URL)

export {
    $host
}