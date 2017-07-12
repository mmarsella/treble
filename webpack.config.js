/*
    ./webpack.config.js
*/
const path = require('path');

// ?? --> How does it know to grab the index.js and put it in the HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './client/index.js',  // Specifies the entry file where the bundler starts the bundling process.
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'  // Specifies the location where the bundled Javascript code is to be saved.
  },
  module: {
    // They are transformations that are applied on a file in our app.
    /*
      The loaders key property takes in an array of loaders. 
      For our basic set-up we specified that the babel-loader goes through and transpiles every file 
      that ends with a .js or .jsx extension excluding the files inside the node_modules folder.
    */
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}