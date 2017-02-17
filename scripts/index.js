const path = require('path');
const run = require('runjs').run;
const helpers = require('../helpers');

module.exports = {
  build: () => {
    run('rimraf dist', {
      cwd: helpers.resolveFromRoot(),
    });
    run('webpack --config configs/webpack/prod.js --progress --colors --displayErrorDetails', {
      cwd: path.resolve(__dirname),
    });
  },
  start: () => {
    run('webpack-dev-server --config configs/webpack/dev.js --colors --port 8080 --displayErrorDetails --hot --inline', {
      cwd: path.resolve(__dirname),
    });
  },
};
