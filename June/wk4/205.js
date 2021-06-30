// 205. Isomorphic Strings
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let arrS = [], arrT = [];
    for(let i=0;i<s.length;i++) {
        if(arrS.indexOf(s[i]) === -1) {
            arrS.push(s[i])
        }
    }
    for(let i=0;i<t.length;i++) {
        if(arrT.indexOf(t[i]) === -1) {
            arrT.push(t[i])
        }
    }
    console.log(arrS);
    console.log(arrT);
    return arrS.length === arrT.length;
};
console.log(isIsomorphic('egg','add'));
console.log(isIsomorphic('foo','bar'));
console.log(isIsomorphic('paper','title'));