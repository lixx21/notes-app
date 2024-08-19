/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: "16px"
    },
    extend: {
      colors:{
        primary: "#0ea5e9",
        secondary: "#cbd5e1",
        dark: "#0f172a",
        background: "#171717"
      },
    },
  },
  plugins: [],
}

