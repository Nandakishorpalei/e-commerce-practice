document.querySelector("#form").addEventListener("submit",addItem);
var prod = JSON.parse(localStorage.getItem("shoppingBag")) || [];

function addItem(e){
    e.preventDefault();

    var prodcutObj = {
        name:form.name.value,
        price:form.price.value,
        type:form.itemType.value,
        imgUrl:form.imgUrl.value,
    }
  prod.push(prodcutObj);
  localStorage.setItem("shoppingBag",JSON.stringify(prod));
   console.log(prodcutObj);
}

document.querySelector("#gotoshop").addEventListener("click",gotoShop);

function gotoShop(){
    window.location.href="product.html";
}