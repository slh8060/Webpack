Plugins

Plugins 是webpack的主心骨，它完成了一些loader不能完成的任务。

一、Anatomy
webpack plugin 一个javascript对象，拥有apply特性。通过
apply能够调用webpack 的编译器。
在此新建一个ConsoleLogOnBuildWebpackPlugin.js。通过
Function.prototype.aaply方法可以传入参数，其中的'this'
只需'compiler'。

二、Usage
使用时需要在webpack的配置文件中new一个实例。

