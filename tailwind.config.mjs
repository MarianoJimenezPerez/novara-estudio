/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores primarios
        "verde-novara": "#14fe7d",
        "negro-novara": "#262626",

        // Colores secundarios
        beige: "#edebd4",
        "verde-claro": "#dcebb1",
        rosa: "#dec9c7",
        "verde-secundario": "#0c9486",
        "negro-puro": "#000000",
      },
      fontFamily: {
        // Tipografía de la marca
        actay: ['"Actay Wide"', '"Space Grotesk"', "sans-serif"],
        bureau: ['"Non Bureau"', "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-verde": "linear-gradient(90deg, #14fe7d 0%, #0c9486 100%)",
      },
    },
  },
  plugins: [],
};
