document.querySelector("#submit").addEventListener("click",signin);
var userCredential = JSON.parse(localStorage.getItem("userData"));

function signin(){
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

var count =0;
if(email == "admin@me.co" && password == "admin"){
    window.location.href="admin.html";
} else{
    
    for(var i =0 ; i < userCredential.length ; i++){
        if(email == userCredential[i].email && password == userCredential[i].password){
            window.location.href="product.html";
            count++;
        }
    }
    if(count == 0){
        alert("Invalid User");
    }
        
}



}