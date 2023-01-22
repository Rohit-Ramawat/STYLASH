//Nav Bar Js
let logo =  document.querySelector(".logo")
logo.onclick = ()=>{
    location.href="index.html"
}
let accountIcon=document.querySelector("#account");
accountIcon.addEventListener("click",()=>{
    location.href="register.html";
 });
let cartIcon=document.querySelector("#cart");
cartIcon.addEventListener("click",()=>{
    location.href="cart.html";
 });


//register js 
let registerForm=document.querySelector("#register_form");
 let countrySelect=document.getElementById("country");
 let titleSelect=document.getElementById("title");
 let firstName=document.getElementById("firstname");
 let lastName=document.getElementById("lastname");
 let phone=document.getElementById("phone");
 let email=document.getElementById("emailid");
 let password=document.getElementById("passwordid");
 
let accountData=JSON.parse(localStorage.getItem("account-data"))||[];
registerForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   let registerdata={
    country:countrySelect.value,
    title:titleSelect.value,
    firstName:firstName.value,
    lastName:lastName.value,
    phone:phone.value,
    email:email.value,
    password:password.value
   };
   accountData.push(registerdata);
   //console.log(accountData);
   localStorage.setItem("account-data",JSON.stringify(accountData));
   alert("Registration Successfull");
});


//signin part
let signinForm=document.getElementById("signin_form");
let emailInp=document.getElementById("email");
let passwordInp=document.getElementById("password");

signinForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let flag = false;
    accountData.forEach((el)=>{
      if(emailInp.value===el.email && passwordInp.value===el.password){
          flag=true;
      }
    });
    if(flag===true){
      alert("Signin Successfull")
    }
    else{
      alert("Wrong Credentials");
    }
});