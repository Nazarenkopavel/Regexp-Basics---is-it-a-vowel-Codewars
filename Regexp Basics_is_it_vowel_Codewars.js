/*
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.
*/
String.prototype.vowel = function() {
  let reg = /^[aeoiou]$/i;
  return reg.test(this);
};

console.log("".vowel());
console.log("a".vowel());
console.log("E".vowel());
console.log("ou".vowel());
console.log("z".vowel());
console.log("lol".vowel());
