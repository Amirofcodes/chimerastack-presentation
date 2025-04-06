/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'modern-primary': '#4f46e5',
        'modern-secondary': '#1e1e2f',
        'modern-background-dark': '#0f172a',
        'modern-card-dark': '#1e293b',
        'modern-text-dark': '#e2e8f0',
      },
    },
  },
  plugins: [],
}
