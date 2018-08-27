/**
 * Created by admin on 2018/4/13.
 */
//立即执行函数， 执行完立刻销毁,引用被销毁
var num = (function abc(param1, param2, param3) {
    console.log("立即执行");
    var result = param1+param2+param3;
    return result;
}(1,2,3))
console.log(num);

//
(function a() {}());//--->W3C推荐书写形式
(function a() {})();

//只有表达式可以被执行符号"()"执行;
//test是函数定义无法被执行符号执行
//test2是函数表达式可以被执行符号执行
//test3是函数表达式可以被执行符号执行
//test4是函数表达式可以被执行符号执行
//test5是函数表达式可以被执行符号执行
// function test() {
//     console.log("test");
// }();
var test2 = function test() {
    console.log("test");
}();
+function test3() {
    console.log("test");
}();
-function test4() {
    console.log("test");
}();
!function test5() {
    console.log("test");
}();