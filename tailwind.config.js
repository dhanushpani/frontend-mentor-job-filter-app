/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "hsl(180, 29%, 50%)",
        cyan: {
          300: "hsl(180, 52%, 96%)",
          500: "hsl(180, 31%, 95%)",
          600: "hsl(180, 8%, 52%)",
          900: "hsl(180, 14%, 20%)",
        },
        // - Light Grayish Cyan (Background): hsl(180, 52%, 96%)
        // - Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
        // - Dark Grayish Cyan: hsl(180, 8%, 52%)
        // - Very Dark Grayish Cyan: hsl(180, 14%, 20%)
      },
      fontFamily: {
        custom: ["Light"],
      },
    },
  },
  plugins: [],
};
