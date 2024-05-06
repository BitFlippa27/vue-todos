/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      textColor: ['active'],
      colors: {
        'vue-brand1': '#42b883',
        'vue-brand2': '#35495e'
      },
      screens: {
        'xs': '320px',
      },
      rotate: {
        '-10': '-10deg',
        '2': '2deg',
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      })
    },
  },
  plugins: [],
}