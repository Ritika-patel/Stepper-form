/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    debugScreens: { position: ['top', 'left'],
},
    extend: {
      dropShadow: {
        'box': '20px 20px 20px rgba(47, 18, 18, 0.101)',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ]
    
}