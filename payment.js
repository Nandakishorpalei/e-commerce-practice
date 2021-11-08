document.querySelector("form").addEventListener("submit",checkOtp);


function checkOtp(e){
    e.preventDefault();
    var otp = document.querySelector("#otp").value;
    if(otp == 1234){
        localStorage.removeItem("cart");
        window.location.href = "complete.html";
    }else{
        alert("Type 1234 in OTP")
    }
    console.log(otp);
}
