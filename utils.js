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

/**
 * A simple forEach() implementation for Arrays, Objects and NodeLists
 * @private
 * @param {Array|Object|NodeList} collection Collection of items to iterate
 * @param {Function} callback Callback function for each iteration
 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
 */
var forEach = function (collection, callback, scope) {
	if(Object.prototype.toString.call(collection) === '[object Object]') {
		for (var prop in collection) {
			if(Object.prototype.hasOwnProperty.call(collection, prop)) {
				callback.call(scope, collection[prop], prop, collection);
			}
		}
	} else {
		if(collection){
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	}
};

/**
 * Merge defaults with user options
 * @param {Object} defaults Default settings
 * @param {Object} options User options
 * @returns {Object} Merged values of defaults and options
 */
var extend = function (defaults, options) {
	var extended = {};
	forEach(defaults, function (value, prop) {
		extended[prop] = defaults[prop];
	});
	forEach(options, function (value, prop) {
		extended[prop] = options[prop];
	});
	return extended;
};


/**
 * Create a fragment DOM elements
 */
var createFragElem = function(htmlStr) {
	var frag = document.createDocumentFragment(),
		temp = document.createElement('div');
	temp.innerHTML = htmlStr;
	while (temp.firstChild) {
		frag.appendChild(temp.firstChild);
	}
	return frag;
};


/**
 * Check if is a color
 */
var isColor = function(color){
	if( color.substring(0,1) == '#' || color.substring(0,3) == 'rgb' || color.substring(0,3) == 'hsl' ){
		return true;
	} else {
		return false;
	}
};


/**
 * Check if is a Base64 string
 */
var isBase64 = function(str) {
    try {
	return btoa(atob(str)) == str;
    } catch (err) {
	return false;
    }
};
