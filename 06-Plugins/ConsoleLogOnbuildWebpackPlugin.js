/**
 * Created by apple on 2017/3/17.
 */
function ConsoleLogOnBuildWebpackPlugin() {

};

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function () {
  compiler.plugin('run',function (compiler,callback) {
      console.log('The webpack build process is starting!!');
      callback();
  })
};