const log = require('connect-logger');

module.exports = {
  files: ['./build/**/*.{html,css}'],
  server: {
    baseDir: './build',
    directory: true,
    middleware: [
      log({ format: '%date %status %method %url' }),
    ],
  },
};
