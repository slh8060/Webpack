/**
 * Created by apple on 2017/3/17.
 */
const webpack = require('webpack');
const configuration = require('./webpack.config');

let  compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin());

compiler.run(function (err,states) {
    console.log('123');
})