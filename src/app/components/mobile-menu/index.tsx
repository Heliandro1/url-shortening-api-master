import Link from "next/link";

export const MobileMenu = () => {
	return (
		<nav className="bg-custom-dark-violet flex flex-col items-center w-[85%] max-w-[85%] p-4 text-white rounded-lg min-h-80 gap-4 font-bold">
			<ul className="flex flex-col items-center justify-center border-b-[0.5px] border-b-custom-gray gap-8 w-full p-6">
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
	);
};
