/**
 * @param {string} s
 * @return {number}
 */
var str1 = 'davdf';
var max = -1;
var lengthOfLongestSubstring = function(s) {
    var str="" //存放无重复子串
    var size=0 //当前最长无重复子串的长度
    for(var i=0,len=s.length;i<len;i++){
        var char=s.charAt(i)
        var index=str.indexOf(char)
        if(index==-1){
            str+=char
            size=size<str.length?str.length:size
        }else{
            str=str.substr(index+1)+char
            console.log(str);
        }
    }
    console.log(size);
};
lengthOfLongestSubstring(str1);