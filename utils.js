/**
*数组去重
*/
function unique(arr){
	var newArr = [];
	arr.forEach(function(item,i){
		if(newArr.indexOf(item) == -1){newArr.push(item) }
    });
	return newArr;
}
