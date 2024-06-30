import Link from "next/link";

export const MobileMenu = () => {
	return (
		<section className="md:hidden fixed top-24 right-0 left-0 flex items-center justify-center w-full px-4">
			<nav className=" bg-custom-dark-violet flex flex-col items-center w-full p-4 text-white rounded-lg min-h-80 gap-4 font-bold max-w-md">
				<ul className="flex flex-col items-center justify-center border-b-[0.5px] border-b-custom-grayish-violet gap-8 w-full p-6">
					<li>
						<Link href="#">Features</Link>
					</li>
					<li>
						<Link href="#">Pricing</Link>
					</li>
					<li>
						<Link href="#">Resources</Link>
					</li>
				</ul>
				<ul className="flex flex-col items-center justify-center w-full gap-4">
					<li>
						<Link href="#">Login</Link>
					</li>
					<li className="w-full h-10">
						<Link
							href="#"
							className="bg-custom-cyan rounded-3xl flex items-center justify-center w-full h-full"
						>
							Sign Up
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};
