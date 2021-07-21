// 290. Word Pattern
// pattern = "abba", s = "dog cat cat dog"

var wordPattern = function(pattern, str) {
    const strArr = str.split(' ');
    const len = pattern.length;
    if (strArr.length !== len) return false;

    for (let i = 0; i < len; i++) {
        if(strArr.indexOf(strArr[i]) !== pattern.indexOf(pattern[i])){
            return false;
        }
    }
    return true;
}

console.log(wordPattern("abba","dog cat cat dog"))
// console.log(wordPattern("abba","dog cat cat fish"))
// console.log(wordPattern("aaaa","dog cat cat dog"))
// console.log(wordPattern("abba","dog dog dog dog"))