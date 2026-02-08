document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

     let StoredData=JSON.parse(localStorage.getItem("userData"));
     console.log(StoredData);
     console.log(email);
     console.log(password);
    if(StoredData.email===email && StoredData.password ===password){
        alert("Login successful");
        window.location.href="../Ecommerce/home.html" ;
    }else{
        alert("Invalid Credentials");
    }

});