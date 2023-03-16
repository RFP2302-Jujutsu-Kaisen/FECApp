require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        AUTH_SECRET: JSON.stringify(process.env.AUTH_SECRET),
      },
    }),
  ],
};
