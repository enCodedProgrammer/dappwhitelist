import axios from "axios"

const instance = axios.create({
    // baseURL: "https://connecttodapps-backend.herokuapp.com",
    baseURL: "http://localhost:9000"
});


// https://free-eth-backend.herokuapp.com

export default instance;