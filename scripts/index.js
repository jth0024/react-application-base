const path = require('path');
const run = require('runjs').run;
const helpers = require('../helpers');

module.exports = {
  clean,
  build,
  start,
};

function build() {
  clean();
  run('webpack --config ../configs/webpack/prod.js --progress --colors --displayErrorDetails', {
    cwd: path.resolve(__dirname),
  });
}

function clean() {
  const distDir = helpers.fromRootDir('dist');
  run(`rimraf ${distDir}`, {
    cwd: path.resolve(__dirname),
  });
}


function start() {
  run('webpack-dev-server --config ../configs/webpack/dev.js --colors --port 8080 --displayErrorDetails --hot --inline', {
    cwd: path.resolve(__dirname),
  });
}
