import axios from "axios";

export const api = axios.create({
	baseURL: String(process.env.NEXT_PRIVATE_API_BASE_URL),
})