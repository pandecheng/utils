function quickSort(arr) {
	if(arr.length <= 1) {
		return arr;
	}
	var left = [],
		right = [],
		baseDot = Math.round(arr.length / 2)
	base = arr.splice(baseDot, 1)[0];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < base) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([base], quickSort(right));
}
let arr = [4,6,1,37,4];

const newarr = quickSort(arr);
console.log(newarr);
