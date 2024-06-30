import { ISavedLinkProps } from "@/app/interfaces/saved-link";
import { useState } from "react";

export const SavedLink = ({ baseURL, shortenURL }: ISavedLinkProps) => {
	const [btnText, setBtnText] = useState("Copy");
	const handleCopy = () => {
		try {
			navigator.clipboard.writeText(shortenURL);
			setBtnText("Copied!");
			setTimeout(() => {
				setBtnText("Copy");
			}, 1000);
		} catch {
			setBtnText("Erro");
			setTimeout(() => {
				setBtnText("Copy");
			}, 1000);
		}
	};
	return (
		<div className="bg-white rounded-md w-full flex flex-col md:flex-row md:justify-between max-w-3xl">
			<div className="border-b md:border-none p-4 flex md:items-center w-full md:max-w-[50%]">
				<p className="overflow-hidden text-sm text-custom-very-dark-blue text-ellipsis whitespace-nowrap">
					{baseURL}
				</p>
			</div>
			<div className="p-4 flex flex-col gap-2 md:flex-row md:items-center">
				<a
					href={shortenURL}
					target="_blank"
					rel="noopener noreferrer"
					className="text-custom-cyan text-sm"
				>
					{shortenURL}
				</a>
				<button
					className={`rounded-md text-white font-bold text-sm h-9 w-full md:w-20 ${
						btnText === "Copy"
							? "bg-custom-cyan"
							: "bg-custom-dark-violet"
					}`}
					onClick={handleCopy}
				>
					{btnText}
				</button>
			</div>
		</div>
	);
};
