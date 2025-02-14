// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{html,js}', 
    ],
    darkMode: ['variant', '&:not(.light *)'],
    theme: {
      extend: {},
    },
    plugins: [],
  }