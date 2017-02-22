module.exports = {
  plugins: ['lodash', 'transform-class-properties'],
  presets: [
    [
      'latest',
      { es2015: { modules: false } },
    ],
  ],
};
