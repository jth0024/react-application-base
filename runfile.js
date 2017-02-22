const path = require('path');
const run = require('runjs').run;
const testBuild = require('./test').testBuild;

const cwd = path.resolve(__dirname);

module.exports = {
  lint,
  release,
  test,
};

function lint() {
  run('eslint configs', { cwd });
  run('eslint helpers', { cwd });
  run('eslint scripts', { cwd });
}

function release() {
  lint();
  test();
  run('npm publish', { cwd });
}

function test() {
  testBuild();
}
