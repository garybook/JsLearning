/**
 * Created by admin on 2018/4/16.
 */
function getLen(str) {
    var ss  = new String(str);
    var len = 0;
    for (var i = 0; i<ss.length; i++){
        if (ss.charCodeAt(i)<=255){
            len+=1;
        }else if (ss.charCodeAt(i)>255){
            len+=2;
        }
    }
    return len;
}

var testStr = "你好和hello,是一样的意思";
getLen(testStr);