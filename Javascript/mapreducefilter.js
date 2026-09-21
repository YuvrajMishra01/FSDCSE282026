const nums = [10, 20, 30, 40, 50,43,643];

nums.forEach((n) => console.log(n));

function print(n) {
  console.log(n);
}
// nums.forEach(print); //for each will not return any value ,it can be used only for printing array

//Map :-It returns array of all elements
// const newNums = nums.map((n) => {
//   return n + 5;
// });

//console.log(newNums);
// const newNums = nums.map((n) => n + 5);
// console.log(newNums);

// const name = [
//   "Yatharth Sharma",
//   "Yatharth Srivastava",
//   "Tarun Gangwar",
//   "Yuvraj Mishra",
//   "Yogendra Yadav",
// ];
// const newNames = name.map((n) => "Mr." + n.toUpperCase());
// console.log(newNames);

//Filter:-It returns the selected items
console.log(nums);
const odds = nums.filter((n) => n % 2 == 1);
console.log(odds);
const evens = nums.filter((n) => n % 2 == 0);
console.log(evens);

const greaterthan40=nums.filter((n)=>n>40);
console.log(greaterthan40);

//reduce:-returns only one value
//100 is default value of initial
const sum =nums.reduce((initial,n)=>initial+n,100);
console.log(sum);

//maximum number of nums
const maxNum = nums.reduce((a,b)=>(a>b?a:b));
console.log(maxNum);
  