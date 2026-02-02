const input = document.querySelector("input");
const output = document.querySelector("p");



input.addEventListener("input", (str) => {
    const regex = /(\s)|(A-Z)/ig;
    const cleanStr = str.target.value.replace(regex, "-", -$);
    output.textContent = cleanStr;
});