//sorting
const nums = [2, 4, 7, 1, 2, 0, -4, 4, 6, 8];
// console.log(nums);
// nums.sort();
// console.log(nums);

const newNums = [...nums].sort();
console.log(newNums);
console.log(nums);

// terniary operator (?:)
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome Back" : "Please login");

// short circuit - &&, ||
console.log(isLoggedIn && "Welcome User"); //ye hai toh hoga
const isAdmin = false;
console.log(isAdmin || "Login user"); //ye nhi toh wo

// optional chaining (?.)
