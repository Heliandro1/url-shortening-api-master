import { ISavedLinkProps } from "@/app/interfaces/saved-link";

export const storage = {
	saveLink: (link: ISavedLinkProps) => {
		if (localStorage.getItem("@urlshortenapp")) {
			const savedLinks = JSON.parse(
				localStorage.getItem("@urlshortenapp")!
			);
			savedLinks.push(link);
			localStorage.setItem("@urlshortenapp", JSON.stringify(savedLinks));
		} else localStorage.setItem("@urlshortenapp", JSON.stringify([link]));
	},
	getSavedLinks: () => {
		const savedLinks = localStorage.getItem("@urlshortenapp");
		if (savedLinks) {
			return [...JSON.parse(savedLinks)].reverse();
		}
		return [];
	},
};
