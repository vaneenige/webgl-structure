const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: `${__dirname}/src/js/main.js`,
  output: {
    path: `${__dirname}/dist/js/`,
    filename: 'final.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: `${__dirname}/node_modules/`,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: production ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
    }),
  ] : [],
  resolve: {
    modules: [`${__dirname}/node_modules/`],
    alias: {
      'dat.gui': 'dat.gui/build/dat.gui',
    },
  },
  stats: {
    colors: true,
  },
};
