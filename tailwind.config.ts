/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable class-based dark mode
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Scan all source files for Tailwind classes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };