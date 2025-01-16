/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        backgroundImage:{
          "hero-pattern": "url('./assets/images/png/hero-sec-bg-img.png')",
        },
        fontSize: {
          'custom-5xl': '40px',
          'custom-xl': '22px',
          'custom-7xl': '70px',
        },
        colors: {
          'off-white': '#FFFFFF91',
        }
      },
    }, 
   plugins: [], 
 };
 
