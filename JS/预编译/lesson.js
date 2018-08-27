function test() {
    //预编译
    console.log(a);//--->输出undefined
    var a = 10;
    console.log(b);//--->报错 Uncaught ReferenceError: b is not defined
}

// test();

var gl = 124;//一切声明的全局变量都是window的属性;
function test2() {
    udfVariable = 1000;//任何变量未声明就直接赋值此变量为全局变量所有
    console.log(window.gl);
    console.log(window.udfVariable);
}

test2();


function fn(a) {
    console.log(a);
    var a = 123;
    console.log(a);
    function a() {    }
    console.log(a);
    var b  = function () { }
    console.log(b);
    function d() { }
    console.log(d);
}