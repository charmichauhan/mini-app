var path = require('path');
var webpack = require('webpack');
var React = require('react');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: ['babel-polyfill','./src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
    plugins:[
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        })
    ],

    module: {

        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /node_modules/ },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
},

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
      },

            "plugins": [
                ["transform-regenerator", {
                    "asyncGenerators": true,
                    "generators": true,
                    "async": true
                }]
            ]

    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css','.jpg']
  },


  devServer: {
    historyApiFallback: true,
    contentBase: './',
      hot: true
  }
};


// test: /\.(jpg|png)$/,
//     loader: "url-loader?limit=25000",
//     include: path.join(__dirname, 'images')


//   test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"


// var path = require('path');
// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var autoprefixer = require('autoprefixer');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// var plugins = [
//     new webpack.NoErrorsPlugin(),
//     new ExtractTextPlugin('css/app.css', {
//         allChunks: true
//     }),
//     new HtmlWebpackPlugin({ template: 'src/index.html', inject: false })
// ];
//
// module.exports = {
//     resolve: {
//         alias: {
//             'react': path.join(__dirname, 'node_modules', 'react')
//         },
//         extensions: ['', '.js', '.jsx', '.sass']
//     },
//     devtool: 'hidden-source-map',
//     entry: [
//         './src/js/index.jsx',
//         './src/css/app.sass'
//     ],
//     output: {
//         path: path.join(__dirname, './build'),
//         filename: 'js/index.js'
//     },
//     plugins: plugins,
//     module: {
//         loaders: [
//             { test: /\.jsx?/, loaders: ['babel'], exclude: /node_modules/ },
//             { test: /\.sass?/, loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])},
//             { test: /\.(png|jpg)$/, loader: 'url-loader?limit=16384&name=images/[name]-[hash].[ext]' },
//             { test: /\.json$/, loader: 'json' }
//         ]
//     },
//     sassLoader: {
//         includePaths: [path.resolve(__dirname, "/src/css")]
//     },
//     postcss: function () {
//         return [autoprefixer];
//     }
// };
//
// rules: [
//     {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//             {
//                 loader: 'file-loader',
//                 options: {}
//             }
//         ]
//     }
// ]
