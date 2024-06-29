import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-custom-very-dark-violet text-white w-full flex flex-col gap-8 py-14 md:flex-row md:px-4 lg:gap-0 lg:justify-start">
			<section className="w-full flex items-center justify-center md:items-start md:min-w-[24%] lg:min-w-[40%] lg:w-auto">
				<h1 className="text-2xl font-bold text-center">Shortly</h1>
			</section>
			<nav className="w-full flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:min-w-fit lg:w-auto lg:mx-8">
				<h1 className="text-sm">Features</h1>
				<ul className="text-sm text-custom-grayish-violet text-center flex flex-col gap-2 md:items-start">
					<li>
						<Link href="#">Link shortening</Link>
					</li>
					<li>
						<Link href="#">Branded Links</Link>
					</li>
					<li>
						<Link href="#">Analytics</Link>
					</li>
				</ul>
			</nav>
			<nav className="w-full flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:min-w-fit lg:w-auto lg:mx-8">
				<h1 className="text-sm">Resources</h1>
				<ul className="text-sm text-custom-grayish-violet text-center flex flex-col gap-2 md:items-start">
					<li>
						<Link href="#">Blog</Link>
					</li>
					<li>
						<Link href="#">Developers</Link>
					</li>
					<li>
						<Link href="#">Support</Link>
					</li>
				</ul>
			</nav>
			<nav className="w-full flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:min-w-fit lg:w-auto lg:mx-8">
				<h1 className="text-sm">Company</h1>
				<ul className="text-sm text-custom-grayish-violet text-center flex flex-col gap-2 md:items-start">
					<li>
						<Link href="#">About</Link>
					</li>
					<li>
						<Link href="#">Our Team</Link>
					</li>
					<li>
						<Link href="#">Careers</Link>
					</li>
					<li>
						<Link href="#">Contact</Link>
					</li>
				</ul>
			</nav>
			<nav className="w-full flex flex-col items-center justify-center md:justify-start md:items-start lg:min-w-fit lg:w-auto lg:mx-8">
				<ul className="flex gap-4 items-center justify-center">
					<li>
						<a
							href="https://www.facebook.com/heliandro.1"
							rel="noopener noreferrer"
						>
							<Image
								src="/images/icon-facebook.svg"
								width={20}
								height={20}
								alt="facebook icon"
							/>
						</a>
					</li>
					<li>
						<Image
							src="/images/icon-twitter.svg"
							width={20}
							height={20}
							alt="twitter icon"
						/>
					</li>
					<li>
						<Image
							src="/images/icon-pinterest.svg"
							width={20}
							height={20}
							alt="pinterest icon"
						/>
					</li>
					<li>
						<a href="https://www.instagram.com/_heliandro">
							<Image
								src="/images/icon-instagram.svg"
								width={20}
								height={20}
								alt="instagram icon"
							/>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
