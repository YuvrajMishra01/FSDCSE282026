// console.log("Hello.. Using JS")

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(23,30)) ;
// let sqroot=Math.sqrt(23)+ Math.sqrt(30);
// console.log(sqroot);

// let a=34;
// if(a>20)
// {
//     let a=45;
//     console.log("a inside a="+a);
// }
// console.log("a outside a="+a);

// const sum= function sum(a,b){
//     return a+b;
// }
// console.log(sum(23,30));

// const sum=(msg)=>{return 20+90 + msg};
// console.log(sum(" hiiiiiii"));
// const sum=(a,b)=>{return Math.sqrt(a+b)}
// console.log(sum(40,90));

//IIFE
// (()=>{console.log("hii")})();

//Callback function
// function sum(a,b){
//     return a+b;
// }
// function sumWithmsg(clbk,msg)
// {
//     const result =clbk(12,40);
//     console.log("Hii"+msg+" "+result);
// }
// sumWithmsg(sum,"Ram");

// function login(msg, error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(msg);
//   }
// }

// function loginHandler(username, password, clbk) {
//   username = "Yuvraj";
//   password = "12345";
//   if (username == "Yuvraj" && password == "12345") {
//     clbk("success", null);
//   } else {
//     clbk(null, "username or password is incorrect");
//   }
// }

// loginHandler("Yuvraj","12345",login);
// loginHandler("YuvrajMishra","12345",login);
setTimeout(() => {
  console.log(One);
  setTimeout(() => {
    console.log(two );
    setTimeout(() => {
      console.log(three);
      setTimeout(() => {
        console.log(four);
        setTimeout(() => {
          console.log(five);
          setTimeout(() => {
            console.log(six);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
