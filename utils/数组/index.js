/**
 *
 * create by decheng at 18/11/8
 * Eeail pandechenge@163.com
 * 数组操作
 * 
 */

/**
 * 
 * @desc 判断两个数组是否相等
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @return {Boolean}      
 */
function arrayEqual(arr1,arr2) {
	if(arr1 === arr2) return true;
	if(arr1.length !== arr2.length) return false;
	for(var i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]) return false;
	}
	return true;
}


/**
 * 
 * @desc 数据深度合并
 * @param  {Array} array 
 * @param  {Number} depth 深度值，默认为1
 * @return {Array}       
 */
function flattenDepth(array, depth = 1) {
	let result = [];
	array.forEach(item => {
		let d = depth;
		if(Array.isArray(item) && d > 0) {
			result.push(...(flattenDepth(item,--d)));
		}else {
			result.push(item);
		}
	});
	return result;
}


/**
 * @desc 拷贝
 * @param  {Any}  value  
 * @param  {Boolean} isDeep 是否深度拷贝
 * @return {Any}         
 */
function clone(value, isDeep) {
	if(value == null) return value;
	if(typeof value !== 'object') return value;

	if(Array.isArray(value)) {
		if(isDeep) {
			return value.map(item => clone(item, true));
		}
		return [].concat(value);
	}else {
		if(isDeep) {
			var obj = {};
			Object.keys(value).forEach(item => {
				obj[item] = clone(value[item], true);
			});
			return obj;
		}
		return {...value};
	}
}



/**
 * 
 * @desc 计算数组特定值出现的次数
 * @param  {Array} arr   
 * @param  {Any} value 
 * @return {Number}       
 */
function countOccurrences(arr, value) {
	return arr.reduce((a, v) => {
		return v === value ? a + 1 : a;
	}, 0);
}


/**
 * @desc 数组去重
 * @param  {Array} arr 
 * @return {Array}    
 *
 * @examp Array.from(new Set([1,2,3,3,3])) //[1,2,3]
 */
function unique(arr) {
	var newArr = [],
		len = arr.length;
	for(var i = 0; i < len; i++) {
		if(newArr.indexOf(arr[i]) === -1){
			newArr.push(arr[i]);
		}
	}	

	return newArr;
}