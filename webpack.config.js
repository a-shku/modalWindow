// const WebpackConcatFilesPlugin = require('webpack-concat-files-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// require('webpack');
// const path = require('path');

// module.exports = {
//   entry: './src/index.ts',
//   mode: 'development',
//   devServer: {
//     disableHostCheck: true,
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//           test: /\.ts?$/,
//           use: 'ts-loader',
//           exclude: /node_modules/
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           {
//             loader: 'style-loader',
//             options: { injectType: 'singletonStyleTag' },
//           },
//           'css-loader',
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin(
//     {
//      template: './src/index.html',
//      inject: 'body',
//     }),
//     new WebpackConcatFilesPlugin({
//       bundles: [
//         {
//           dest: './build/index.js',
//           src: './src/**/*.ts',
//         },
//       ],
//     }),
//   ],
//   resolve: {
//     extensions: [ ".ts", ".js" ]
//   },
// };

const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: glob.sync('./src/**/*.ts'),
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
    {
     template: './src/index.html',
     inject: 'body',
    }),
    new miniCss({
      filename: 'styles.[hash].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};



// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// module.exports = {
//   entry: './src/index.ts',
//   mode: 'development',
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'build'),
//     },
//     hot: true,
//     compress: true,
//     port: 9000,
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'index.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           {
//             loader: 'style-loader',
//             options: { injectType: 'singletonStyleTag' },
//           },
//           'css-loader',
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
//   ],
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
// };
