import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-fir-2ad56.cloudfunctions.net/api",
});//http://127.0.0.1:5001/fir-2ad56/us-central1/api

export default instance;



