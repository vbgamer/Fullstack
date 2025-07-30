export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kalam"', 'cursive'],
      },
      colors: {
        'paper': '#fdf6e3',
        'ink': '#4a4a4a',
        'ink-light': '#6b6b6b',
        'stroke': '#d3c0a2',
        'highlight': '#fffadd',
      },
      boxShadow: {
        'sketchy': '4px 4px 0px 0px #d3c0a2',
      }
    },
  },
  plugins: [],
};
