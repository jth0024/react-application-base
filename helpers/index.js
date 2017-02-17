const path = require('path');

module.exports = {
  resolveFromRoot,
};

function resolveFromRoot(pathFragment = '') {
  return path.resolve(__dirname, '../../', pathFragment);
}
