/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        'sysmango-brown': '#605338',
        'sysmango-cream': '#F5F5DC',
        'sysmango-gray': '#D5D5D5',
        'sysmango-text': '#333333',
        'sysmango-blue': '#4682B4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
