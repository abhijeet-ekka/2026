const input = document.querySelectorAll("input")
const userP = document.getElementById("P");
const email = document.getElementById("email");
const password = document.getElementById("password");
const number = document.getElementById("number");
const pattern = {
    user: /^[a-z0-9]{5,12}$/,
    telephone: /^\d{11}$/g,
    email: /^[a-z0-9]\@gmail\.com$/
}

function validate(field, regex){
   if(regex.test(field.value)){
    field.className="valid";
    userP.style.color = "green"
    console.log("true")
   }else 
    field.className="invalid";
    userP.style.color = "green"
    console.log("false")
}

input.forEach(input => {
    input.addEventListener("keyup", (e) =>{
        console.log(e.target.name);
        validate(e.target, pattern[e.target.name])
    })
});