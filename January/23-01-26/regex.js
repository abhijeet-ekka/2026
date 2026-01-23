const regex = /freecodecamp/g
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.match(regex);
const replaced = str.replace(regex, "Abhijeet")
console.log(matched);
console.log(replaced);

