import Axios from "axios";

const https = Axios.create({
    baseURL: process.env.AXIOS_BASEURL,
    timeout: process.env.AXIOS_TIMEOUT
})


https.interceptors.request(config => config)

https.interceptors.response(config => config, error => Promise.reject(error))


export default https
