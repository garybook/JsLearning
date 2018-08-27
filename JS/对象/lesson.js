/**
 * Created by admin on 2018/4/15.
 */
// 对象创建方法
// 1.var obj = {};  -->plainObject 对象字面量/对象直接量
// 2.构造函数
// 一.系统自带构造函数  new Object();

// 二.自定义构造函数
/**
 * 自定义构造函数为了与普通函数有所区别
 * 最好采用大驼峰命名规则
 */
function Person() {
    // var this = {};
    this.name = "xiaoWang";
    this.sex = "female";
    this.age = 17;
    // return this;

}
var person1 = new Person();

// 包装类型
var num = new Number(123);
var str = new String('abcd');
var bol = new Boolean(true);

var number = 123;
// number.length = new Number(123).length;  -->delete
console.log(number.length);//-->undefined;

var arr = [1,2,3,4,5,6];
arr.length = 2;
console.log(arr);//--->[1,2]

var string = '123456';
// string.length = new String('123456');  -->delete
string.length = 2;
console.log(string);//-->'123456'