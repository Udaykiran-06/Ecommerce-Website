document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let productId=localStorage.getItem("productId");

    if(allproducts && productId){
        let selectedProduct=allproducts.find((v)=>{
            return v.id==productId 
        })
        if(selectedProduct){
            let price = Math.round(selectedProduct.price*90);
            
            productDetails.innerHTML=`
            <main>
            <div id="top">
            <img src="${selectedProduct.thumbnail}"/>
            <div id="details">
            <h1>${selectedProduct.title}</h1>
            <p><b>Brand:</b>${selectedProduct.brand}</p>
            <p><b>Category:</b>${selectedProduct.category}</p>
            <p><b>Description:</b>${selectedProduct.description}</p>
            <p id="price">Price:&#8377; <b>${Math.round(price)}</b></p>
            <button id="btn1">Add to Cart</button><button id="btn2">Back to Home</button>
            </div>
            </div>
            <div id="bottom">
            <h1>Customer reviews</h1>
            <div id="review">
            ${selectedProduct.reviews.map((review)=>`
                <p>${redHearts(review.rating)}${blackHearts(5-review.rating)}</p>
                <p>${review.comment}</p>
                <p id="hr">By ${review.reviewerName} on ${review.date} IST</p>
                `
            )}
            </div>
            </div>
            </main>`
        };
        document.getElementById("btn2").addEventListener("click",()=>{
            window.location.href="../Ecommerce/home.html"
        })
        document.getElementById("btn1").addEventListener("click",()=>{
            btn1(selectedProduct);
        })
        }else{
            productDetails.innerHTML=`<p>Product Not Found....</p>`
        }
})
function redHearts(rating){
    let redHearts="";
    for(let i=1;i<=rating;i++){
        redHearts+='❤️';
    }
    return redHearts;
} 
function blackHearts(rating){
    let blackHearts="";
    for(let i=1;i<=rating;i++){
        blackHearts+='🖤';
    }
    return blackHearts;
}
function btn1(product){
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added successfully!!!!");
}





































// document.addEventListener("DOMContentLoaded",()=>{
//     let productDetails=document.getElementById("productDetails");
//     let allproducts=JSON.parse(localStorage.getItem("allproducts"));
//     let productId=localStorage.getItem("productId");

//     if(allproducts && productId){
//         let selectedProduct=allproducts.find((v)=>{
//             return v.id==productId
//         })
//         if(selectedProduct){
//             productDetails.innerHTML=`
//             <main>
//             <h1>${selectedProduct.title}</h1>
//             </main>`
//         }}else{
//         productDetails.innerHTML=`<p>Product No Found....</p>`
//         }
    

// })
// document.addEventListener("DOMContentLoaded",()=>{
//     let productDetails=document.getElementById("productDetails");
//     let allproducts=JSON.parse(localStorage.getItem("allproducts"));
//     let productId=localStorage.getItem("productId");

//     if(allproducts && productId){
//         let selectedProduct=allproducts.find((v)=>{
//             return v.id==productId 
//         })
//         if(selectedProduct){
//             let price = Math.round(selectedProduct.price)
//             productDetails.innerHTML=`
//             <main>
//             <h1>${selectedProduct.title}</h1>
//             </main>`
//         }
//         }else{
//             productDetails.innerHTML=`<p>Product Not Found....</p>`
//         }
// })