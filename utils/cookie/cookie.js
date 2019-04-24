/**
 *
 * cookie 操作
 * @version 1.1.0
 * @author decheng
 * @url https://github.com/pandecheng/utils
 * 
 */


/**
 * 
 * @des 根据name读取cookie
 * @param  {String} name 
 * @return {String}      
 */
function getCookie(name){
	var arr = document.cookie.replace(/\s/g,'').split(';');
	for(var i = 0; i <arr.length; i++) {
		var tempArr = arr[i].split('=');
		if(tempArr[0] === name){
			return decodeURIComponent(tempArr[1]);
		}
	}
	return '';
}


/**
 * 
 * @desc 设置Cookie
 * @param {String} name  
 * @param {String} value 
 * @param {Number} days  
 */
function setCookie(name, value, days) {
	var date = new Date();
	date.setDate(date.getDate() + days);
	document.cookie = name + '=' + value + ';expires=' + date;
}