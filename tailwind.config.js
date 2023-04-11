/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        bigDesktop: { max: "3200px" }, //Big desktop
        semiBigDesktop: { max: "1920px" },
        bigScreen:{max: "1539"},
        bSemiBig: { max: "1440px" }, //1440
        bSemismall: { max: "1366px" }, //
        lgDesktop: { max: "1280px" }, //large desktop
        smDesktop: { max: "1024px" }, // small desktop
        smDesk: { max: "917px" }, // small desktop
        tabletAir: { max: "820px" }, // small desktop
        tablet: { max: "768px" },
        extraTab:{max:"767px"},
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
