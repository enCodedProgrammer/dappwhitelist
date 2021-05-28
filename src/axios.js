import axios from "axios"

const instance = axios.create({
    baseURL: "http://free-eth-backend.herokuapp.com",
});

export default instance;