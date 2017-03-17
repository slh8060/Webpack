var path = require('path');

module.exports = {
    entry: {
        bundle1: './app/index.js',
        bundle2: './app1/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    }
};