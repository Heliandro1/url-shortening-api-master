"use client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Link from "next/link";
import { CardsSection } from "./components/CardsSection";
import { SavedLink } from "./components/SavedLink";
import { SyntheticEvent, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
	const [url, setUrl] = useState("");
	const [isInvalid, setIsInvalid] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (url.trim() === "") {
			inputRef.current?.classList.add("placeholder-custom-red");
			inputRef.current?.classList.add("border-custom-red");
			inputRef.current?.classList.add("border");
			setIsInvalid(true);
		}
	};

	return (
		<>
			<Header />
			<main className="w-full bg-[#F0F1F6] flex flex-col gap-8">
				<section className="bg-white flex flex-col gap-3 w-full md:flex-row-reverse overflow-hidden md:justify-around h-[40rem] lg:h-[43rem] items-center">
					<div className="flex items-center justify-center mr-[-100px] lg:mr-[-215px] max-h-[55%] h-fit ">
						<Image
							src="/images/illustration-working.svg"
							width={100}
							height={40}
							alt="Illustration working"
							className="w-full h-full"
						/>
					</div>
					<div className="flex flex-col items-center justify-center gap-8 md:items-start md:px-8 mb-8 ">
						<div className="flex flex-col gap-2 lg:max-w-[363px]">
							<h1 className="text-custom-very-dark-blue text-4xl font-bold text-center md:text-justify lg:text-5xl">
								More than just shorter links
							</h1>
							<p className="text-custom-gray text-sm text-center md:text-justify lg:text-lg">
								Build your brand’s recognition and get detailed
								insights on how your links are performing.
							</p>
						</div>
						<Link
							href="#"
							className="bg-custom-cyan rounded-3xl flex items-center justify-center p-4 font-bold w-44 h-12 text-white"
						>
							Get started
						</Link>
					</div>
				</section>
				<section className="px-4 w-full flex felx-col items-center justify-center mt-[-95px]">
					<form
						method="post"
						className="w-full max-w-3xl flex flex-col bg-blend-color-dodge bg-custom-dark-violet bg-cover bg-no-repeat bg-custom-mobile md:bg-custom-desktop rounded-md p-4 gap-4 md:flex-row md:p-8"
						onSubmit={handleSubmit}
					>
						<div className="gap-2 flex flex-col md:w-[80%]">
							<input
								type="text"
								className="w-full h-10 rounded-md text-sm px-2"
								placeholder="Shorten a link here..."
								value={url}
								ref={inputRef}
								onChange={({ currentTarget }) => {
									setUrl(currentTarget.value);
									if (isInvalid) {
										inputRef.current?.classList.remove(
											"placeholder-custom-red"
										);
										inputRef.current?.classList.remove(
											"border-custom-red"
										);
										inputRef.current?.classList.remove(
											"border"
										);
										setIsInvalid(false);
									}
								}}
							/>
							{isInvalid && (
								<p className="text-xs text-custom-red">
									<i>Please add a link</i>
								</p>
							)}
						</div>
						<div className="md:w-[20%]">
							<button
								className={`rounded-md text-white font-bold text-sm h-10 w-full bg-custom-cyan`}
								type="submit"
							>
								Shorten It!
							</button>
						</div>
					</form>
				</section>
				<section className="px-4 w-full flex felx-col items-center justify-center">
					<SavedLink
						baseURL="https://alkskosksok.comok.coakosl.comok.cokdimisiasojsijaoisjioajsoijsioajsijasoijosjioasjiojass"
						shortenURL="https://ajsosokos.com.osokoskoka"
					/>
				</section>
				<section className="w-full flex flex-col items-center justify-center gap-4 mt-8">
					<h1 className="text-2xl text-custom-very-dark-blue font-bold">
						Advanced Statistics
					</h1>
					<p className="text-sm text-custom-grayish-violet text-center w-[30ch] lg:w-[45ch]">
						Track how your links are performing across the web with
						our advanced statistics dashboard.
					</p>
				</section>

				<CardsSection />
				<section className="flex flex-col items-center justify-center text-white h-60 bg-blend-color-dodge bg-custom-dark-violet bg-cover bg-no-repeat bg-custom-mobile gap-4 md:bg-custom-desktop">
					<h1 className="text-2xl font-bold">
						Boost your links today
					</h1>
					<Link
						href="#"
						className="bg-custom-cyan rounded-3xl flex items-center justify-center p-4 font-bold w-44 h-12"
					>
						Get started
					</Link>
				</section>
			</main>
			<Footer />
		</>
	);
}
