/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#635985',
        'primary-2': '#443C68',
        'primary-3': '#393053',
        'primary-4': '#18122B',
        'secondary-1': '#50FE73',
        'tertiary-1': '#FEAC4D'
      }
    },
  },
  plugins: [],
}
