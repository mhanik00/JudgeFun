/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors can be added here
        primary: '#1D4ED8', // Example primary color
        secondary: '#3B82F6', // Example secondary color
      },
     
    },
  },
  plugins: [],
}

