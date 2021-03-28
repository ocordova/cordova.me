var cssnano = require('cssnano')({ preset: 'default' });

var production = process.env.NODE_ENV === 'production' ? cssnano : '';

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
    production,
  ],
};
