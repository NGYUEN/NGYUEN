/**
 * Created by Administrator on 2017-02-13 .
 */
//两者区别：
//AMD ? 异步模块加载，require.js，提前执行，推崇依赖前置,
//CMD ? 通用模块加载，sea.js，延迟执行，推崇依赖就近
//require.js,页面一开始就写好，一上来就先加载好所需要用的模块，预加载，建议官网的写法
//sea.js使用的时候才加载需要的模块，懒加载

//require.js
require(["a"],function(arrSort){
    //var arr = [3,2,7,11,9,4];
    var arr={};
    console.log(arrSort(arr));
});
//sea.js
define(function(require){
    var arr = [3,2,7,11,9,4];
    var arrSort = require("a");
    console.log(arrSort(arr));
});
