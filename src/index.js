import path from 'path';
import { run } from 'runjs';

export default {
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
  run('rimraf ../../../dist', {
    cwd: path.resolve(__dirname),
  });
}


function start() {
  run('webpack-dev-server --config ../configs/webpack/dev.js --colors --port 8080 --displayErrorDetails --hot --inline', {
    cwd: path.resolve(__dirname),
  });
}
