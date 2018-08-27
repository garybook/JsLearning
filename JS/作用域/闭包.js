/**
 * Created by admin on 2018/4/13.
 */
function test() {
    var arr=[];
    for (var i=0; i<10; i++){
        arr[i]=function () {
            document.write(i+"\n");
        }
    }
    return arr;
}

// var arrFun = test();
// for (var j=0; j<10; j++){
//     arrFun[j]();
// }


function test2() {
    var arr = [];
    for (var i=0; i<10; i++){
        (function (index) {
            arr[index] = function () {
                document.write(index+"\n");
            }
        }(i));
    }
    return arr;
}

var arrFun2 = test2();
for (var j=0; j<10; j++){
    arrFun2[j]();
}