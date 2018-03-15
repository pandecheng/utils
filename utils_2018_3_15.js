1 数组平均数
    使用reduce() 将每个值添加到累加器，初始值为0，总各除以数组长度
    
    const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
    
    //average([1,2,3,4,5]) -> 3

2 大写每个单词的首字母
    使用replace() 匹配每个单词的第一个字符，并使用toUpperCase() 
    
   const capitalizeEveryWord = str => str.replace(/\b[a-z]/g,char => char.toUpperCase());
    
    //capitalizeEveryWord('hi ming'); -> 'Hi Ming'
3 首字母大字
    使用slice(1)
    
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    //capitalize('hi'); -> 'Hi'
