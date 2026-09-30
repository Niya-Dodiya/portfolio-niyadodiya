/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-olive': '#6b8e23', // Olive green primary accent
        'brand-olive-light': '#8daf40',
        'brand-cyan': '#00e5ff', // Light blue/cyan secondary hover/glow
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
