const path = require('path');

const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
});
module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
