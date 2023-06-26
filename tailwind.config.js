// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          'first-red' : '#CB6D77',
          'second-orange' : '#D69364',
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
  }