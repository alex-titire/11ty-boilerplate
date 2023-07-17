/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

