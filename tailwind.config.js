/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./assets/images/bg.png')",
      },
    },
    //  colors: {
    //   primary: "#FFA07A",
    //   secondary: "#0FCFEC",
    //   accent: "#19D3AE",
    //   neutral: "#3d4451",
    //   "base-100": "#ffffff",
    // },
  },
  plugins: [
    require('@tailwindcss/line-clamp') 
  ],
}
