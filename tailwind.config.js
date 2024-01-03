/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	safelist: [
		'bg-orange-700',
		'bg-zinc-700',
		'bg-pink-700',
		'bg-purple-700',
		'bg-indigo-700',
		'bg-blue-700',
		'bg-green-700',
		'bg-yellow-700',
		'bg-red-700',
		'bg-gray-700',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

