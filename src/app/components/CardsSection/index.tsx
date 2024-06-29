import Image from "next/image";

export const CardsSection = () => {
	return (
		<section className="w-full flex flex-col items-center justify-center px-4 lg:flex-row">
			<div className="bg-white rounded-md flex flex-col items-center justify-center h-56 px-4 w-full lg:items-start lg:px-6 lg:w-fit">
				<div className="bg-custom-dark-violet w-16 h-16 rounded-[50%] flex items-center justify-center mt-[-75px] mb-8">
					<Image
						src="/images/icon-brand-recognition.svg"
						alt="Brand recognition"
						width={30}
						height={30}
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-2 lg:items-start">
					<h1 className="text-lg text-custom-very-dark-blue font-bold">
						Brand Recognition
					</h1>
					<p className="text-sm text-custom-grayish-violet text-center w-[27ch] lg:text-justify">
						Boost your brand recognition with each click. Generic
						links don’t mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</div>
			</div>
			<div className="h-20 bg-custom-cyan w-2 lg:h-2 lg:w-8 lg:mb-[-35px]" />
			<div className="bg-white rounded-md flex flex-col items-center justify-center h-56 px-4 w-full lg:items-start lg:px-6 lg:w-fit lg:mb-[-70px]">
				<div className="bg-custom-dark-violet w-16 h-16 rounded-[50%] flex items-center justify-center mt-[-55px] mb-8">
					<Image
						src="/images/icon-detailed-records.svg"
						alt="Detailed Records"
						width={30}
						height={30}
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-2 lg:items-start">
					<h1 className="text-lg text-custom-very-dark-blue font-bold">
						Detailed Records
					</h1>
					<p className="text-sm text-custom-grayish-violet text-center w-[27ch] lg:text-justify">
						Gain insights into who is clicking your links. Knowing
						when and where people engage with your content helps
						inform better decisions.
					</p>
				</div>
			</div>
			<div className="h-16 bg-custom-cyan w-2 lg:h-2 lg:w-8 lg:mb-[-35px]" />
			<div className="bg-white rounded-md flex flex-col items-center justify-center h-56 px-4 w-full lg:items-start lg:px-6 lg:w-fit lg:mb-[-130px]">
				<div className="bg-custom-dark-violet w-16 h-16 rounded-[50%] flex items-center justify-center mt-[-55px] mb-8">
					<Image
						src="/images/icon-fully-customizable.svg"
						alt="Detailed Records"
						width={30}
						height={30}
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-2 lg:items-start">
					<h1 className="text-lg text-custom-very-dark-blue font-bold">
						Fully Customizable
					</h1>
					<p className="text-sm text-custom-grayish-violet text-center w-[27ch] lg:text-justify">
						Improve brand awareness and content discoverability
						through customizable links, supercharging audience
						engagement.
					</p>
				</div>
			</div>
		</section>
	);
};
