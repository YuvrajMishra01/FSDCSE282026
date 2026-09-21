import { products } from "./products_100.js";
//console.log(products);
//for each never return any value
// products.forEach((p)=>{
//     const{name,price}=p;
//console.log(p);
//     console.log(name,price);
// });
//const newProducts = products.map((p) => {
//  const {price} = p;
//console.log(name, price, category, price * qty);
// const newPrice =price +(price*10)/100;
//return { name, price, category, totalPrice: price * qty };
//return{...p,price: newPrice};
//});
//console.log(newProducts);
const foodItems = products.filter((p) => p.category == "food");
console.log(foodItems);

// Show only prices above 300 using filter
const itemsOver300 = products.filter((p) => p.price > 300);
console.log(itemsOver300);
console.log("totalItems", itemsOver300.length);

const totalPrice=products.reduce((sum,p)=>{
    return p.price*p.qty + sum;
},0);
console.log("Total Price: ",totalPrice);
