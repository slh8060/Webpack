
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

const config  = {
    entry:'./app/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template:'./index.html'})
    ]
};

module.exports = config;