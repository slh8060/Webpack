Loaders
一、Install
1、npm install --save-dev css-loader
2、npm install --save-dev style-loader

二、Use
1、三种使用方法：可以通过配置webpack.config.js、require或者Cli,本例
使用的是第一种方法，以下具体介绍三种使用方法：

a、Via webpack.config.js
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
  
  注意：需要两个加载器转换css文件，第一个css-loader是读取css文件,style-loader将样式标签插入到 Html中。
  
  b、Via require
  require('style-loader!css-loader?modules!./styles.css');
  
  c、Via CLI
  webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
  