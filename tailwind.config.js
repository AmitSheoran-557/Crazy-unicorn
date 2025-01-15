/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
      extend: {
        backgroundImage:{
          "hero-pattern": "url('./assets/images/png/hero-sec-bg-img.png')",
        }
      },
    }, 
   plugins: [], 
 };
 