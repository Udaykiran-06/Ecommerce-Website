let product=[];
function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product);
    })
}
function displayProduct(prod){
    let output="";
    prod.map((val)=>{
        output+=`
        <main  id="card">
        <div id="image">
        <img src="${val.thumbnail}"/>
        </div>
        <h3>${val.title}</h3>
        <div id="content">
        <h4>Rating:${val.rating}</h4>
        <p>Price: &#8377;${Math.round((val.price)*90)}</p>
       </div>
        <div id="content2"> 
        <p>Stock:${val.stock}</p>
        <button onclick="details(${val.id})">Details</button></div>
        </main>`
    })
    document.getElementById("product-container").innerHTML=output;
}
document.getElementById("searchbar").addEventListener("input", function searchItem(event) {
    let searchTerm = event.target.value.toLowerCase();
    let filteredProduct = product.filter((v) => {
        return (
            v.title.toLowerCase().includes(searchTerm) ||
            v.category.toLowerCase().includes(searchTerm)
        );
    });
    displayProduct(filteredProduct); 
});
fetchData();    
function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="../viewDetails/viewDetails.html"
    
}
