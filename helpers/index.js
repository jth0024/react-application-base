const path = require('path');

module.exports = {
  fromRootDir,
  getRootDir,
};

function fromRootDir(relativePath) {
  return path.join(getRootDir(), relativePath);
}

function getRootDir() {
  return path.resolve(__dirname, '../../../');
}
