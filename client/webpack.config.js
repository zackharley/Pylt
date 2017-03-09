const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: './client/dist/public/js',
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
	      test: /\.scss/,
	      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
	    },
    ],
  },
};
