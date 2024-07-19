/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			backgroundImage: {

				"success-bg-one": "url('/images/success-stories/success-story-1.png')",
				"success-bg-two": "url('/images/success-stories/success-story-2.jpeg')",
				"success-bg-three": "url('/images/success-stories/success-story-3.jpeg')",

			},
			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {


			},
			fontFamily: {

				geomanist_bold: [ "Geomanist Bold", "sans-serif" ],
				geomanist_book: [ "Geomanist Book", "sans-serif" ],
				geomanist_light: [ "Geomanist Light", "sans-serif" ]

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
