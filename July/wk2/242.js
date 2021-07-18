// 242. Valid Anagram

var isAnagram = function(s, t) {
    const sortS = s.split('').sort().join('');
    const sortT = t.split('').sort().join('');
    console.log(sortS);
    console.log(sortT);
    return sortS === sortT;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));