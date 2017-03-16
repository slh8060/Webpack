
Create a demo directory to try out webpack.
一、Install webpapck
1、npm init
2、npm install --save-dev webpack
二、Started
1、index.js  使用的是lodash，所以首先要安装lodash,当然，你也可以直接用javascript
   npm install --save-dev ladash;
三、Run
1、webpack app/index.js dist/bundle.js 就会在dist文件下生成打包后的文件了
注意：在项目中使用的是ES6/JSX的语法，安装babel-loader可将其编译何曾js文件：
  npm install --save-dev babel-cli babel-preset-es2015 babel-loader