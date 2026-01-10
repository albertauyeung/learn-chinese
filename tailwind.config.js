/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1b26',
          card: '#24283b',
          hover: '#2d3149',
        },
        accent: {
          blue: '#7aa2f7',
          green: '#9ece6a',
          purple: '#bb9af7',
          orange: '#ff9e64',
          pink: '#f7768e',
        },
      },
      fontFamily: {
        chinese: ['Noto Sans TC', 'sans-serif'],
        display: ['Fredoka', 'Quicksand', 'sans-serif'],
      },
      fontSize: {
        'chinese-lg': ['48px', { lineHeight: '1.2' }],
        'chinese-xl': ['72px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
