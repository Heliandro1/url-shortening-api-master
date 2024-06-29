import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"custom-mobile": "url('/images/bg-boost-mobile.svg')",
				"custom-desktop": "url('/images/bg-boost-desktop.svg')",
			},
			colors: {
				"custom-dark-violet": "hsl(257, 27%, 26%)",
				"custom-cyan": "hsl(180, 66%, 49%)",
				"custom-red": "hsl(0, 87%, 67%)",
				"custom-gray": "hsl(0, 0%, 75%)",
				"custom-grayish-violet": "hsl(257, 7%, 63%)",
				"custom-very-dark-blue": "hsl(255, 11%, 22%)",
				"custom-very-dark-violet": "hsl(260, 8%, 14%)",
			},
		},
	},

	plugins: [],
};
export default config;
