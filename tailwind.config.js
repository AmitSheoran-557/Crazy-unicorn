/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        backgroundImage:{
          "hero-pattern": "url('./assets/images/png/hero-sec-bg-img.png')",
          "team" : "url('./assets/images/png/team-bg.png')",
          "faq" : "url('./assets/images/png/faq-bg.png')",
          "footer" : "url('./assets/images/png/footer-bg.png')",
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
 
