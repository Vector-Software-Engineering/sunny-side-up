const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
  entry: "./client/src/index.jsx",
  output: { path: path.join(__dirname, "client", "dist") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/src/index.html",
    }),
  ],
};
