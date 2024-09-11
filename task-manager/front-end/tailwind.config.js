/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom, #e5e5e5, #bfbfbf)",
      },
    },
  },
  plugins: [],
};
