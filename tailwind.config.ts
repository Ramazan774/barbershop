import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: [
			  '-apple-system', 
			  'BlinkMacSystemFont', 
			  '"Segoe UI"', 
			  'Roboto', 
			  '"Helvetica Neue"', 
			  'Arial', 
			  '"Noto Sans"', 
			  'sans-serif',
			  '"Apple Color Emoji"', 
			  '"Segoe UI Emoji"', 
			  '"Segoe UI Symbol"', 
			  '"Noto Color Emoji"',
			],
		},
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require("@tailwindcss/forms"),
	require("@tailwindcss/aspect-ratio")
],
};
export default config;
