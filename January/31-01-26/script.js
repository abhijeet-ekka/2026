const input = document.querySelectorAll("input")
const userP = document.getElementById("userP");
const email = document.getElementById("email");
const password = document.getElementById("password");
const number = document.getElementById("number");
const pattern = {
    user: /^[a-z0-9]{5,12}$/,
    telephone: /^\d{11}$/g,
    email: /^[a-z0-9]\@gmail\.com$/
}

function validate(field, regex){
    console.log(regex.test(field.value));
}

input.forEach(input => {
    input.addEventListener("keyup", (e) =>{
        console.log(e.target.name);
        validate(e.target, pattern[e.target.name])
    })
});