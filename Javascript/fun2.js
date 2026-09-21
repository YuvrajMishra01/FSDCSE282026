//default parameter in function
// const greeting =(uname="Guest")=>{
//     console.log(`Hello ${uname}`);
// };

// greeting();
// greeting("Yuvraj");

const wishes =(uname)=>{
    const msg = uname || "Guest"; //short circuit
    console.log(`Hello ${msg}`);
};

wishes();
wishes("Yuvraj");