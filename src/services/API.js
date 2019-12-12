import axios from 'axios';
import SERVER_URL from "../constants/server";

export default axios.create({
    baseURL: "https://api.github.com/users/juliooaa",
    responseType: "json"
});