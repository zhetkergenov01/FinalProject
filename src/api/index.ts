import axios from "axios";

export const $api = axios.create({
    baseURL: "https://cards-nya-back-production.up.railway.app/2.0",
    withCredentials: true,
    headers: {
        "Content-Type": 'application/json',
    }
})

$api.interceptors.request.use((request) => {
    const token = localStorage.getItem("userToken")
    request.headers.Authorization = 'Bearer ' + token
    return request
})














