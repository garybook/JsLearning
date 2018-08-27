/**
 * Created by admin on 2018/4/11.
 */
function transfer(a) {

    if(typeof(a)==="number"){
        var str = a+"";
        var transferStr="";
        for(var index in str){
            switch(str[index]){
                case "0":
                    if ((str.length-index)!=5){
                        transferStr+="零";
                        break;
                    }
                    transferStr+=divider(str.length-index);
                    break;
                case "1":
                    transferStr+="壹";
                    ttransferStr+=divider(str.length-index);
                    break;
                case "2":
                    transferStr+="贰";
                    transferStr+=divider(str.length-index);
                    break;
                case "3":
                    transferStr+="叁";
                    transferStr+=divider(str.length-index);
                    break;
                case "4":
                    transferStr+="肆";
                    transferStr+=divider(str.length-index);
                    break;
                case "5":
                    transferStr+="伍";
                    transferStr+=divider(str.length-index);
                    break;
                case "6":
                    transferStr+="陆";
                    transferStr+=divider(str.length-index);
                    break;
                case "7":
                    transferStr+="柒";
                    transferStr+=divider(str.length-index);
                    break;
                case "8":
                    transferStr+="捌";
                    transferStr+=divider(str.length-index);
                    break;
                case "9":
                    transferStr+="玖";
                    transferStr+=divider(str.length-index);
                    break;
            }
        }
        while (transferStr.lastIndexOf("零")!=-1&&(transferStr.lastIndexOf("零")==transferStr.length-1)){
            transferStr = transferStr.substring(0, transferStr.length-1);
        }
        transferStr+="圆";
        console.log(transferStr);
    }else{
        return "请输入10位以内的数字";
    }
}

function  divider(a) {
    var transferStr="";
    switch (a){
        case 10:
            transferStr+="拾";
            break;
        case 9:
            transferStr+="億";
            break
        case 8:
            transferStr+="仟";
            break
        case 7:
            transferStr+="佰";
            break
        case 6:
            transferStr+="拾";
            break
        case 5:
            transferStr+="萬";
            break
        case 4:
            transferStr+="仟";
            break
        case 3:
            transferStr+="佰";
            break
        case 2:
            transferStr+="拾";
            break
    }

    return transferStr;
}