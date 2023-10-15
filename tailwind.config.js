/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-dark": "theme(colors.slate.900)",
        "app-light": "theme(colors.slate.50)",
        "app-primary": "theme(colors.blue.400)",
        "app-secondary": "theme(colors.blue.800)",
        "app-red": "theme(colors.red.400)",
        "app-yellow": "theme(colors.yellow.400)",
        "app-green": "theme(colors.green.400)",
      },
      spacing: {
        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        650: "650px",
        700: "700px",
        750: "750px",
        800: "800px",
        850: "850px",
        900: "900px",
        950: "950px",
        1000: "1000px",
        1200: "1200px",
        1500: "1500px",
        2000: "2000px",
      },
    },
  },
  plugins: [],
};
