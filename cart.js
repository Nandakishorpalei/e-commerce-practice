var cartProduct = JSON.parse(localStorage.getItem("cart"));
var total = document.createElement("h2");
var checkOut = document.createElement("button");
checkOut.textContent = "CheckOut";
document.body.append(total,checkOut);

checkOut.addEventListener("click",payment);
function payment(){
    window.location.href = "payment.html";
}

cartProduct.forEach(element => {
    var nameIs = document.createElement("h1");
    nameIs.textContent = element.name;
    var priceIs = document.createElement("h1");
    priceIs.textContent = element.price;
    var typeIs = document.createElement("h1");
    typeIs.textContent = element.type;
    var img = document.createElement("img");
    img.setAttribute("src",element.imgUrl);

    document.body.append(nameIs,priceIs,typeIs,img);
});

var totalValue = cartProduct.reduce((ac,pv) =>{
    return ac + Number(pv.price)
},0)
   
console.log(totalValue);

total.innerHTML = `<h1>Total Amount Is ${totalValue} </h1>`;