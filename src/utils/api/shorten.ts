"use server"
import { api } from "./instance";

export const shortenURL = async (URL: string) => {
	try {
		const { data } = await api.post(
			"api/v2/link",
			{
				url: encodeURI(URL),
			},
			{
				headers: {
					"api-key": String(process.env.NEXT_PRIVATE_API_KEY),
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		return data;
	} catch (error) {
		return error;
	}
};
