/**
 * Created by admin on 2018/4/16.
 */

// Car.prototype-->原型
// Car.prototype = {};-->是祖先
// Car.prototype.name = "BMW";
// Car.prototype.height = 1400;
// Car.prototype.lang = 4900;

Car.prototype = {
    name:'BMW',
    height:1400,
    lang:4900
};

function Car() {
    
}
var car1 = new Car();


