const regex = /freecodecamp/;
const test = regex.test("f");
console.log(test);

const match = "what are freeCodeCamp".match(regex);
console.log(match);


const str = "freecodecamp is ryl cet";
const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced);