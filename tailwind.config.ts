import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
    },
    // fontSize: {
	  //   'xxs': '0.575rem',
    // },
  	screens: {
  		x3lmax: {
  			max: '2550px'
  		},
  		x2lmax: {
  			max: '1650px'
  		},
  		xlmax: {
  			max: '1279px'
  		},
  		lgmax: {
  			max: '1023px'
  		},
  		mdmax: {
  			max: '767px'
  		},
  		smax: {
  			max: '639px'
  		},
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	fontFamily: {
  		body: ['Kozuka Gothic Pro','sans-serif']
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
