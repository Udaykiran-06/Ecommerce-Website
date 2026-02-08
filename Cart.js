document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})
function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) ||[];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    // console.log(cart);
    // console.log(cartContent);
    // console.log(totalPrice);
    let totalBill=0;
    if(cart.length==0){
        cartContent.innerHTML=`<p>Your cart is Empty start shopping</p>`
    }
    cart.map((product,i)=>{
        totalBill +=Math.floor((product.price)*90)
        // console.log(product,i); 
        let newProd=document.createElement("div")
        newProd.setAttribute("class","prod-info")
        newProd.innerHTML=`
        <div id="product-contain">
        <div id="prod">
        <img src="${product.thumbnail}"/>
        </div>
        <div id="product-details">
        <h1>${product.title}</h1>
        <p>Availability:${product.availabilityStatus}</p>
        <p>Category:${product.category}</p>
        <p>Return Policy:${product.returnPolicy}</p>
        <p>Shipping Information: ${product.shippinInformation}</p>
        <p>Stock:${product.stock}</p>
        <p>Warranty Information:${product.warrantyInformation}</p>
        <p>Price:<i class="bi bi-currency-rupee"></i>${product.price.toFixed(2)*90}</p>
        <button onclick="RemoveFromCart(${i})" >Remove</button>
        </div>
        </div>
        `;
        
        cartContent.append(newProd);


    })
    totalPrice.innerHTML=`<h2>Total Price:<i class="bi bi-currency-rupee"></i>${totalBill}</h2>`
 
}
function RemoveFromCart(index){
    let cart=JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    location.reload();
    // displayCart();
}