/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '1px 5px 14px rgba(40, 1, 107, 1.15)',
        '4xl': [
            '1px 5px 10px rgba(188, 66, 245, 0.15)',
            '1px 5px 5px rgba(79, 50, 240, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

 
