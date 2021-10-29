import axios from "axios"

const instance = axios.create({
    baseURL: "http://www.connecttodapps.ga",
});


// https://free-eth-backend.herokuapp.com
// http://localhost:9000

export default instance;