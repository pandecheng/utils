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

4 回文检查
    将字符串toLowerCase(),并使用replace()去除所有非字符串，最后使用数组反转比较
    
    const palindrome = str => {
        const s = str.toLowerCase().replace(/[\W_]/g,'');
        return s === s.split('').reverse().join('');
    }
    
    //palindrome('abc  cba'); -> true
  
5 计数数组中值的出现次数
    每次遇到数组中的特定值时，使用reduce（）来递增计数器。

    const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

    // countOccurrences([1,1,2,1,2,3], 1) -> 3    
    
6 deep Array
    使用递归，使用reduce（）来获取所有不是数组的元素，flatten每个元素都是数组。
    
    const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);

    //deepFlatten([1,2,3,[4,5],6,[7,[8,9]]]); -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

7 数组之间的区别
    从b创建一个Set，然后在a上使用Array.filter(), 只保留b中不包含的值
    
    const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); }
    
    //difference([1,2,3],[1,2]); -> [3]
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
