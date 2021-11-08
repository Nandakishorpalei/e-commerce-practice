var product = JSON.parse(localStorage.getItem("shoppingBag"));
var cartBox = JSON.parse(localStorage.getItem("cart")) || [];

var container = document.getElementById("container");
displayItem(product);


function sortItem(){
    var selectedItem = document.querySelector("#selectItem").value;
    console.log(selectedItem);
    if(selectedItem== "low"){
        product = product.sort(function (a,b){
            if(a.price > b.price) return 1;
            if(a.price < b.price) return -1;
            return 0;
        })
    }
    if(selectedItem== "high"){
        product = product.sort(function (a,b){
            if(a.price > b.price) return -1;
            if(a.price < b.price) return 1;
            return 0;
        })
    }
    displayItem(product);
}

function sortbyName(){
    var selectedItem = document.querySelector("#selectbyName").value;
    console.log(selectedItem);
    if(selectedItem== "asc"){
        product = product.sort(function (a,b){
          return  a.name > b.name ? 1 : b.name > a.name ? -1: 0;
            
        })
    }

    if(selectedItem== "des"){
        product = product.sort(function (a,b){
          return  a.name > b.name ? -1 : b.name > a.name ? -1: 0;
        })
    }
    displayItem(product);  
}




function displayItem(product){
    document.getElementById("imgDiv").innerHTML ="";
    
    product.forEach((element,index) => {
    var imgDiv = document.getElementById("imgDiv");
    var nameIs = document.createElement("h1");
    nameIs.textContent = element.name;
    var priceIs = document.createElement("h1");
    priceIs.textContent = element.price;
    var typeIs = document.createElement("h1");
    typeIs.textContent = element.type;
    var img = document.createElement("img");
    img.setAttribute("src",element.imgUrl);
    var btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click",function(){
        addToCart(element,index);
    })
    var gobtn = document.createElement("button");
    gobtn.textContent = "go to cart";
    gobtn.addEventListener("click",function(){
        window.location.href="cart.html";
    })
  
    imgDiv.append(img,nameIs,priceIs,typeIs,btn,gobtn);
    container.append(imgDiv);
});

function addToCart(element,index){
    var count =0;
    cartBox.forEach((el) =>{
        if(el.indexNo == index && count == 0){
            alert("This Product is in the cart already");
           count++; 
        }
    }) 
    if(count == 0){
        element["indexNo"]= index;
        cartBox.push(element);
        localStorage.setItem("cart",JSON.stringify(cartBox));
    
        window.location.href="cart.html";
    }
   
}

}