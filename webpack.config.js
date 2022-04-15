const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "client/src", "index.jsx"),
  watch: true,
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client", "index.html"),
    }),
  ],
  mode: 'production',
  // devServer: {
  //   onListening: (args) => {
  //     console.log('im wacthing u', args , '<<<<<<<<<<')
  //   },
  //   historyApiFallback: true,

  //   // static: {
  //   //   directory: path.join(__dirname, "client/"),
  //   //   publicPath: '/*'
  //   // }
  // }
}