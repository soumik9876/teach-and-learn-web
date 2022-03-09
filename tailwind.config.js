module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			// ** This is used to create custom theme
			colors: {
				c_background: "#FAFAFA",
				c_text: "#585652",
				c_inactive_text: "#C4C4C4",
				c_primary_light: "#F7F4EB",
				c_primary_main: "#FFC72C",
				c_secondary_main: "#176590",
				c_primary_dark: "#F5B501",
			},
			fontFamily: {
				raleway: ["Raleway, sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
