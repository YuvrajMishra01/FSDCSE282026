// console.log("hello");

// let p1=new Promise((resolve,reject)=>{
//     let a=Math.random();
//     if(a<0.5){
//         reject("the no. is rejected 1");
//     }
//     else{
//         setTimeout(()=>{
//             console.log("time 1");
//             resolve("Yash 1");
//         },3000);
//     }
// })

// let p2=new Promise((resolve,reject)=>{
//     let a=Math.random();
//     if(a<0.5){
//         reject("the no. is rejected 2");
//     }
//     else{
//         setTimeout(()=>{
//             console.log("time 2");
//             resolve("Yash 2");
//         },2000);
//     }
// })

// let p3=Promise.race([p1,p2])
// p3.then((a)=>{
//     console.log(a);
// }).catch(err=>{
//     console.log("error");
// })

const mypromise = new Promise((resolve, reject) => {
  let username = "promise20";
  let password = "123456";
  if (username == "promise20") resolve("sucess");
  else reject("invalid");
});

// console.log(mypromise);

// mypromise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((msg) => {
//         console.log(msg);
//     })
//     .finally(() => {
//         console.log("Resource closed");
//     });

async function handleLogin() {
  const status = await mypromise;
  console.log(status);
  return status;
}
// handleLogin(123456);

async function orderRecieved() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("One order recieved");
    }, 1000);
  });
}

async function OrderPrepared() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order prepared");
    }, 1000);
  });
}

function OrderHandover() {
  console.log("order Picked");
}
function OrderCompleted() {
  console.log("Order Completed");
}

function OTP() {
  return Math.floor(Math.random() * 10000);
}

async function main() {
  const status = await handleLogin(123456);
  const login = OTP();
  const verifiedOtp = login;
  console.log(login);

  if (status == "sucess" && login == verifiedOtp) {
    console.log(" hi i am inside the sucess");
    const orderstatus = await orderRecieved();
    console.log(orderstatus);
    const orderpreparedstatus = await OrderPrepared();
    console.log(orderpreparedstatus);
    const HandOverStatus = OrderHandover();
    console.log(HandOverStatus);
    const completion = OrderCompleted();
    console.log(completion);
  }
}

main();
