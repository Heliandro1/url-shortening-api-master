import { api } from "./instance";

export const shortenURL = async (URL: string) => {
	try {
		const { data } = await api.post("api/v1/shorten", {
			url: encodeURI(URL),
		});
		return data;
	} catch (error) {
		return error;
	}
};
