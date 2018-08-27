/**
 * Created by admin on 2018/4/12.
 */
function a() {

}
var glob =100;
a();
//a.[[scope]]  a的作用域


function aa() {

    function bb() {
        var bbb = 234;
        document.write(aaa);
    }

    var aaa = 123;
    // bb();
    return bb;
}

var demo=aa();
demo();

