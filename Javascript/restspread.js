// const nums =[10,20,30]
// const newNums = [40,50,...nums,60,70];

// console.log(nums);
// console.log(newNums);

// const user ={
//     email:"abc@gmail.com",
//     age: 28,
//     gender:"male",
// };
// const adminUser={...user,role: "admin"};

// console.log(user);
// console.log(adminUser);

//rest operator
const see = (...args)=> {
    console.log(args);
};
see(1,"Hello",20,false);
see("Hi","F9");
see(10,20,30);

const show =(uname,msg, ...rest) =>{
    console.log(`Hello ${uname}, Your msg is ${msg}`);
    console.log(`Extra args is : ${rest}`);
}

show("Hello","Bye","I can see");
show("Hello","Bye","I can see","Monday");
show("Hello","Bye","I can see","Monday","10:30"); 
