let logo =  document.querySelector(".logo")
logo.onclick = ()=>{
    location.href="index.html"
}
let accountIcon=document.querySelector("#account");
accountIcon.addEventListener("click",()=>{
    location.href="register.html";
 });
let signupButton=document.querySelector(".Sign");
signupButton.addEventListener("click",()=>{
   location.href="register.html";
});
let cartIcon=document.querySelector("#cart");
cartIcon.addEventListener("click",()=>{
    location.href="cart.html";
 });
let video=document.getElementById("top");
video.addEventListener("click",()=>{
   location.href="bag.html";
});
let scarves=document.querySelector('.scarves');
scarves.addEventListener("click",()=>{
   location.href="scarves.html";
})