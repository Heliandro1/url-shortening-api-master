import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Link from "next/link";
import { CardsSection } from "./components/CardsSection";
import { SavedLink } from "./components/SavedLink";

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<main className="w-full bg-[#F0F1F6]">
				<section className="w-full flex flex-col items-center justify-center gap-4">
					<h1 className="text-2xl text-custom-very-dark-blue font-bold">
						Advanced Statistics
					</h1>
					<p className="text-sm text-custom-grayish-violet text-center w-[30ch] lg:w-[45ch]">
						Track how your links are performing across the web with
						our advanced statistics dashboard.
					</p>
				</section>
				<SavedLink />
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
