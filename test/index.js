const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
// const devConfig = require('../configs/webpack/dev.js');
const webpackConfigs = require('../configs').webpack;
const webpackMerge = require('webpack-merge');

module.exports = {
  testBuild,
};

function afterCompile(err, stats) {
  if (err) {
    console.error(err);
  }
  if (stats.hasErrors()) {
    console.log(stats.toString({
      chunks: false,
      colors: true,
    }));
  }
}

function getCompiler(example, config) {
  const examplePath = path.join(__dirname, `../examples/${example}`);

  return webpack(webpackMerge(config, {
    context: examplePath,
    output: _.assign({}, config.output, {
      path: path.join(examplePath, 'dist'),
    }),
  }));
}

function runExamples(examples, config) {
  examples.forEach(example => {
    const compiler = getCompiler(example, config);
    compiler.run(afterCompile);
  });
}

function testBuild() {
  const examples = fs.readdirSync(path.resolve(__dirname, '../examples')).filter(dir => dir[0] !== '.');
  runExamples(examples, webpackConfigs.prod);
}
