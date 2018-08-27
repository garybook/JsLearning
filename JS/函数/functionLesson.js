/**
 * Created by admin on 2018/4/11.
 */
// function test(){
//     document.write("hello world");
// }

/**
 *
 * @param a 形参 形式上要穿的参数
 */
function sum(a,b,c,d) {

    for(var s in arguments){
        console.log(arguments[s])
    }
    console.log(a);
    console.log(arguments[0]);

    /**
     * arguments中的值和形参是一一对应的， arguments中的值改变 对应形参值也会跟着改变 反之亦然
     */
    a = 10;
    console.log(arguments[0]);
    arguments[0]=9;
    console.log(a);
    /**
     * arguments中没有的值 是不会与形参建立对应关系的
     */
    console.log(d);
    console.log(arguments[3]);
    d = 5;
    console.log(d);
    console.log(arguments[3]);
}
/**
 * 实参   实际传入的值
 */
sum(11,2,3);


function myNum() {
    for(var s in arguments){
        console.log(arguments[s])
    }
}

myNum(0,1,2,3,4,5,6,7,8,9);

function test() {
    var a = 10;
    function testChild() {
        var b = 100;
    }
    console.log(b);
}