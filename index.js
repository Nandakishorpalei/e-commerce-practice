document.querySelector("#submit").addEventListener("click",addData);
var userArr = JSON.parse(localStorage.getItem("userData")) || [] ;

function addData(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var user = document.querySelector("#user").value;
    var mobile = document.querySelector("#mobile").value;

    var userCredentials = {
        email: email,
        password: password,
        userName: user,
        phone: mobile
    };
userArr.push(userCredentials);

console.log(userArr);
localStorage.setItem("userData",JSON.stringify(userArr));


window.location.href="signin.html";
}