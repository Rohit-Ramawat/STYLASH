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
       name:"Vintage Check Boucle Mini Lola Bag",
       price:1750,
       id:1,
       image:"https://assets.burberry.com/is/image/Burberryltd/0922AA38-461C-4E56-8117-2FD492657AE3?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
    },
    {
        name:"Vintage Check Boucle Small Lola Bag",
        price:2250,
        id:2,
        image:"https://assets.burberry.com/is/image/Burberryltd/55327074-5EE7-458B-89CE-4AF883B39AD4?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Vintage Check Boucle Medium Lola Bag",
        price:2500,
        id:3,
        image:"https://assets.burberry.com/is/image/Burberryltd/23A6CDC3-4C23-4439-8C30-01C4540B7559?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Quilted Leather Small Lola Camera Bag",
        price:1550,
        id:4,
        image:"https://assets.burberry.com/is/image/Burberryltd/05F9BDE3-BE50-4CA9-9F46-1C898C00ED57?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Quilted Leather Small Lola Camera Bag",
        price:1350,
        id:5,
        image:"https://assets.burberry.com/is/image/Burberryltd/616CCD47-46C3-4CFB-818B-D7DEF19706E8?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Quilted Leather Mini Lola Camera Bag",
        price:1350,
        id:6,
        image:"https://assets.burberry.com/is/image/Burberryltd/FE1AAA09-6D25-47F3-88B7-74F39405C64F?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Horseferry Print Canvas Note Bag",
        price:1450,
        id:7,
        image:"https://assets.burberry.com/is/image/Burberryltd/E15EB72B-7C78-4E9F-A237-DD3ACFA809FD?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Canvas And Leather Note Bag",
        price:1450,
        id:8,
        image:"https://assets.burberry.com/is/image/Burberryltd/E81FCFD5-25C3-4773-A203-DE6C5F3EBE97?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Exaggerated Check And Leather Note Bag",
        price:1750,
        id:9,
        image:"https://assets.burberry.com/is/image/Burberryltd/5169F618-AF09-468F-BCFD-874C7E09B104?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Vintage Check And Leather Note Bag",
        price:1550,
        id:10,
        image:"https://assets.burberry.com/is/image/Burberryltd/0E5EAEDF-0ABB-4DA5-A214-0A8D46D2AFEA?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Quilted Leather Mini Lola Bag",
        price:1550,
        id:11,
        image:"https://assets.burberry.com/is/image/Burberryltd/A7E9BCF5-F135-4E37-B32D-52D06D7FC8F1?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Quilted Leather Mini Lola Bag",
        price:1550,
        id:12,
        image:"https://assets.burberry.com/is/image/Burberryltd/40A59A54-6132-4392-9AF8-951741BC5B91?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
     },
     {
        name:"Grainy Leather Mini Frances Bag",
        price:2590,
        id:13,
        image:"https://assets.burberry.com/is/image/Burberryltd/BA2A7880-6612-4C64-8179-F54B95C1C262?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"Grainy Leather Mini Frances Bag",
        price:2590,
        id:14,
        image:"https://assets.burberry.com/is/image/Burberryltd/8C8D26EB-863D-42BC-9941-2CD6826CA20F?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"Grainy Leather Mini Frances Bag",
        price:2590,
        id:15,
        image:"https://assets.burberry.com/is/image/Burberryltd/7F6B102B-9EA6-4928-A4C9-B3427E2FC696?$BBY_V2_SL_1x1$&wid=2500&hei=2500"
     },
     {
        name:"The TB Bag",
        price:2500,
        id:16,
        image:"https://assets.burberry.com/is/image/Burberryltd/42FE3356-F28D-4602-9A5D-E938552B743F?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
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
