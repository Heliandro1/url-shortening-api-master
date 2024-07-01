import Image from "next/image";
import { MobileMenu } from "../Mobile-Menu";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<header className="sticky top-0 flex p-4 w-full bg-white h-20 items-center justify-between">
			<div className="w-[60%] flex md:items-center md:justify-around gap-12">
				<div className="flex justify-end w-[40%]">
					<Image
						src="/images/logo.svg"
						alt="logo"
						width={100}
						height={40}
					/>
				</div>
				<ul className="items-center justify-start text-custom-gray gap-8 font-bold text-sm hidden md:flex w-full">
					<li>
						<Link
							href="#"
							className="hover:text-custom-very-dark-violet"
						>
							Features
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="hover:text-custom-very-dark-violet"
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="hover:text-custom-very-dark-violet"
						>
							Resources
						</Link>
					</li>
				</ul>
			</div>
			<div className="hidden md:flex justify-between w-[30%]">
				<ul className="flex items-center justify-center w-full gap-7 text-sm">
					<li>
						<Link
							href="#"
							className="hover:text-custom-very-dark-violet font-bold text-custom-gray"
						>
							Login
						</Link>
					</li>
					<li className="w-24 h-10">
						<Link
							href="#"
							className="bg-custom-cyan rounded-3xl flex items-center justify-center w-full h-full text-white font-bold"
						>
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
			<div
				className="flex flex-col gap-1 h-full items-center justify-center *:bg-custom-grayish-violet *:w-5 *:h-[2px] md:hidden"
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{showMobileMenu && <MobileMenu />}
		</header>
	);
};
