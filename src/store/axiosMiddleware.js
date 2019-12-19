import axios from "axios";
import { SERVER_URL } from "../constants/server";
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({ baseURL: SERVER_URL, responseType: "json"});

export default axiosMiddleware(client);