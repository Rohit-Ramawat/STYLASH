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

 //Data Array-->
 let data=[
    {
       name:"The Classic Check Cashmere Scarf in Red",
       price:520,
       id:1,
       image:"https://assets.burberry.com/is/image/Burberryltd/136E2B54-8409-477A-9EB6-B77B59972D7D?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
    },
    {
        name:"The Lightweight Wool Check Cashmere Scarf",
        price:655,
        id:2,
        image:"https://assets.burberry.com/is/image/Burberryltd/ffab2ae04942b3ae0a79177a81f2d969ee55b18d?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Pale Candy",
        price:520,
        id:3,
        image:"https://assets.burberry.com/is/image/Burberryltd/3FFC7E1D-1FD5-4AE9-8C75-C66894D88DE3?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Alabaster",
        price:520,
        id:4,
        image:"https://assets.burberry.com/is/image/Burberryltd/97fe7cac8de92c0ada2a46f5804df6d52a68e5cd?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Navy",
        price:520,
        id:5,
        image:"https://assets.burberry.com/is/image/Burberryltd/B96BF4FB-6853-4877-8B3C-3D89ECF6EF9C?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Burgandy",
        price:520,
        id:6,
        image:"https://assets.burberry.com/is/image/Burberryltd/84dd9128b654bce1202c246b9aa355325484fed3?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Bright Red",
        price:520,
        id:7,
        image:"https://assets.burberry.com/is/image/Burberryltd/7d3257733f04d02db0450bfa159a6c4de1cb3bfd?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Lightweight Wool Check Cashmere Scarf",
        price:650,
        id:8,
        image:"https://assets.burberry.com/is/image/Burberryltd/C0A5E2F4-53C6-449B-B980-6EE7B3F8C04B?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Vintage Lightweight Wool Check Cashmere Scarf",
        price:650,
        id:9,
        image:"https://assets.burberry.com/is/image/Burberryltd/1B687566-0D14-42CF-B961-32058A0816C6?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Stone",
        price:520,
        id:10,
        image:"https://assets.burberry.com/is/image/Burberryltd/9B7010A2-99A8-440B-BC8F-C6A6C882B9AF?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Mini Classic Check Cashmere Scarf in Stone",
        price:600,
        id:11,
        image:"https://assets.burberry.com/is/image/Burberryltd/144999A5-45BB-4624-BC8F-A02345A7A956?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Archieve",
        price:550,
        id:12,
        image:"https://assets.burberry.com/is/image/Burberryltd/8de370a325861e6849fb100c09ce87a5cbe22f3b?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Pink",
        price:590,
        id:13,
        image:"https://assets.burberry.com/is/image/Burberryltd/6B64296E-1EA2-4398-B17C-714F0C30F01C?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Albaster Pink",
        price:590,
        id:14,
        image:"https://assets.burberry.com/is/image/Burberryltd/251ED96F-B19B-4D1F-A295-94BEF13D22CF?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Scarf in Blush",
        price:520,
        id:15,
        image:"https://assets.burberry.com/is/image/Burberryltd/e6018d2e337eec4e09d77af778da046b116a9e46?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The Classic Check Cashmere Men Scarf in Blush",
        price:600,
        id:16,
        image:"https://assets.burberry.com/is/image/Burberryltd/A31D9EB5-824B-4201-80E4-E9B5A1DD70C5?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
     },
 ];

//catching container div element
 let container=document.getElementById("container");
 
 //local storage-->>
 let Cart=JSON.parse(localStorage.getItem("cart-bag"))||[];

 //display in DOM
 function display(data){
    data.forEach(el => {
        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",el.image);
        let name=document.createElement("h4");
        name.innerText=el.name;
        let price=document.createElement("p")
        price.innerText=`$${el.price}`;
        let Add=document.createElement("button");
        Add.innerText="Add";
        Add.addEventListener("click",()=>{
           if(checkCart(el)){
            alert("Product already added into Cart");
           }else{
            Cart.push({...el,quantity:1}); //adding quantity key in object
            localStorage.setItem("cart-bag",JSON.stringify(Cart));
            alert("Product added into Cart");
           }
        });
        card.append(image,name,price,Add);
        container.append(card);
    });
 }
 display(data);

 //checking duplicate item in Cart
 function checkCart(product){
   for(let i=0;i<Cart.length;i++){
      if(Cart[i].id===product.id){
         return true;
      }
   }
   return false;
 }
