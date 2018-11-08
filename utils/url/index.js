/**
 *
 * url 参数解释
 * @version 1.1.0
 * @author decheng
 * @url https://github.com/pandecheng/utils
 * 
 */

/**
 * 
 * @desc 解释url参数
 * @param  {String} url default: window.location.href
 * @return {Object}     
 */
function parseQueryString(url) {
    var url = !url ? window.location.href : url;

    if(url.indexOf('?') === -1) {
        return {};
    }

    var search = url[0] === '?' ? url.substr(1) : url.substr(url.lastIndexOf('?') + 1);
    if(search === '') {
        return {};
    }

    search = search.split('&');
    var query = {};
    search.forEach(function(item, index) {
        var pair = item.split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });
    return query;

}