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

let container=document.getElementById("cart-container");
let total=document.getElementById("cart-total");

 //accessing Local Storage with key "cart-bag"
 let Cart=JSON.parse(localStorage.getItem("cart-bag"))||[];

 display();  //function calling

 //display in DOM
 function display(data){
    container.innerText="";
    Cart.forEach(el => {
        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",el.image);
        let name=document.createElement("h4");
        name.innerText=el.name;
        let price=document.createElement("p")
        price.innerText=`$${el.price}`;
        let quantity=document.createElement("span");    //for quantity
        quantity.textContent=el.quantity; 
        
        let Remove=document.createElement("button"); 
        let Increment=document.createElement("button");
        let Decrement=document.createElement("button");    
        
        Remove.textContent="Remove"
        Increment.textContent="+"
        Decrement.textContent="-"
        
        Remove.addEventListener("click",()=>{   //adding eventlistner into button for Removing
           Cart=Cart.filter((element)=>{
             return (element.id) !== (el.id);
           })
           localStorage.setItem("cart-bag",JSON.stringify(Cart));
           display(Cart);
        });
        Increment.addEventListener("click",()=>{   //adding eventlistner into button for increasing
           el=el.quantity++;
           localStorage.setItem("cart-bag",JSON.stringify(Cart));
           display(Cart);
        });
        Decrement.addEventListener("click",()=>{   //adding eventlistner into button for decreasing
           if(el.quantity>1){
            el=el.quantity--;
            localStorage.setItem("cart-bag",JSON.stringify(Cart));
            display(Cart);

           }
        });

        card.append(image,name,price,Increment,quantity,Decrement,Remove);
        container.append(card);
    });

    //Bill Part here
    let sum=0;
       for(let i=0;i<Cart.length;i++){
        sum+=Cart[i].price*Cart[i].quantity;
       }
       total.textContent=sum;
 }
 