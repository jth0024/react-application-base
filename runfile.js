import path from 'path';
import { run } from 'runjs';

const cwd = path.resolve(__dirname);

export default {
  build,
  clean,
  lint,
  release,
};

function build() {
  clean();
  run('babel src --out-dir ./dist', { cwd });
}

function clean() {
  run('rimraf dist', { cwd });
}

function lint() {
  run('eslint src && eslint configs', { cwd });
}

function release() {
  lint();
  build();
  run('npm publish', { cwd });
}
