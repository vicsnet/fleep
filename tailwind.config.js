/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        bigDesktop: {max: "3200px"}, //Big desktop
        lgDesktop: { max: "1280px" }, //large desktop
        smDesktop: { max: "1024px" }, // small desktop
        smDesk: { max: "917px" }, // small desktop
        tabletAir: { max: "820px" }, // small desktop
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // require("flowbite/plugin"),
  ],
};
