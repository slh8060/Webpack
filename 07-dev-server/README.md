一、webpack Watch Mode
webpack watch mode一旦检测到代码发生改变时，它将重新编译。
1、安装：npm i --save-dev serve;
2、在 package.json中添加如下代码：
...
"scripts": {
  "start": "serve"
}
...

至此，便可通过 npm start启动运行项目。


二、webpack-dev-server
webpack-dev-server 提供一个服务器并支持在线的热更新。
1、开始前，请确保你有一个index.html文件，假设打包后的
文件名是 bundle.js:
<script src="/bundle.js"></script>
2、安装：npm install webpack-dev-server --save-dev
3、项目运行：webpack-dev-server --open
如果控制台显示找不到该命令时，尝试运行该命令：node_modules/.bin/webpack-dev-server
最合适的方法时在package.json添加如下代码："scripts": { "start": "webpack-dev-server" }
4、在浏览器中输入http://localhost:8080   
5、更改代码保存后，可以看见控制台在不断的编译，编译完成后，无需刷新页面，你会发现页面会自动更新。


三、webpack-dev-middleware
如果你已经有了Node.js server,webpack-dev-middleware 是
非常有用的。当项目还在编译时，webpack-dev-middleware将延迟请求直到编译结束。

1、安装：npm install express webpack-dev-middleware --save-dev
2、安装完成后，可以像下面例子一样使用：
var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/" // Same as `output.publicPath` in most cases.
}));

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});