import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  theme: {
    extend: {
      colors: {
        raccoonBlack: "#111",
        raccoonWhite: "#f4f4f4",
        raccoonGray: "#999",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
});
