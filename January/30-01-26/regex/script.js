const userName = document.getElementById("user-name");
const userP = document.getElementById("userP");
const email = document.getElementById("email");
const password = document.getElementById("password");
const number = document.getElementById("number");
const pattern = {
    user: /^[a-z0-9]{5,12}$/,
    telephone: /^\d{11}$/g
}

function user(){
    const userNameRegex = 

    if(pattern.user.test(userName.value)){
        userP.textContent = "correct";
        userP.style.color = "red";
    }
    else userP.style.color = "red";
        userP.textContent = "Its not correct user name"
}

console.log(pattern.telephone)


userName.addEventListener("input", user);