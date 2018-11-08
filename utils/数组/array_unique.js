数组去重

1、遍历数组去重

function unique(obj){
    var arr = [];
    var len = obj.length;
    for(var i=0;i<len;i++){
        if(arr.indexOf(obj[i]) == -1){
            arr.push(obj[i])
        }
    }
    return arr;
}
unique([1,1,1,2,3]); -> [1,2,3]


2、对象键值对法

function unique(obj){
    var tar = {},arr = [],len = obj.length,val,type;
    for(var i = 0;i<len;i++){
        if(!tar[obj[i]]){
            tar[obj[i]] = 1;
            arr.push(obj[i])
        }
    }
    return arr;
}
3、es6 new Set()方法

Array.from(new Set([1,2,3,3,3])) //[1,2,3]
