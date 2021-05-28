import axios from "axios"

const instance = axios.create({
    baseURL: "https://free-eth-backend.herokuapp.com",
});

export default instance;