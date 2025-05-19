/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          '900': '#1a365d', // Primary theme color
        },
        'orange': {
          '400': '#f6ad55', // Secondary theme color
          '500': '#ed8936',
        },
      },
    },
  },
  plugins: [],
}; 