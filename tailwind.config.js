/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "container-color": "#21222c",
        "bg-color": "#574a68",
        "title-color": "#be29ec",
        "text-color": "#efbbff",
      },
    },
  },
  plugins: [],
};
