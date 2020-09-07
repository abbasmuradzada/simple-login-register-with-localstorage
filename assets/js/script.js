var password1 = document.getElementById("exampleInputPassword1");
var password2 = document.getElementById("exampleInputPassword2");
var danger = document.querySelector(".td");
var success = document.querySelector(".ts");
var input = document.getElementById("exampleInputEmail1");


let accounts = [];
let accountId = 0;

document.querySelector(".register").addEventListener("click", () => {
  if (input.value.length > 3) {
    if (password1.value.length > 6 && password2.value.length > 6) {
      if (password1.value === password2.value) {
        danger.innerText = "";
        success.innerText = "registered";
        if (localStorage.getItem("accounts")) {
          accounts = JSON.parse(localStorage.getItem("accounts"));
        }
        accounts.push({ 
        accountId: (accountId + 1),
        accountname:input.value,
        accountpass:password1.value
        });
        accountId=accountId+1;
        localStorage.setItem("accounts", JSON.stringify(accounts));
      } else {
        danger.innerText = "password is not same";
        success.innerText = "";
      }
    } else {
      danger.innerText = "min 6 caracter";
      success.innerText = "";
    }
  } else {
    danger.innerText = "write username";
    success.innerText = "";
  }
});

var loginUser = document.getElementById("InputEmail1");
var loginPassword = document.getElementById("InputPassword1");

document.querySelector(".login").addEventListener('click',()=>{
    let profile = JSON.parse(localStorage.getItem("accounts"));
    var b = profile.find(a=>a.accountname===loginUser.value && a.accountpass===loginPassword.value);
    if(b!=undefined){
        document.querySelector(".lts").innerText="welcome";
        document.querySelector(".ltd").innerText="";
       
    }else{
        document.querySelector(".lts").innerText="";
        document.querySelector(".ltd").innerText="login or password is incorrect";   
    }
})