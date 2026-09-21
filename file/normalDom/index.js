const root = document.getElementById(`root`);
const button = document.getElementById(`btn`);
console.log(root);
const h2 = document.createElement("h2");
const h3 =document.createElement("h3");
const img = document.createElement("img");
const loader =document.createElement('h1');
loader.innerHTML=(' Loading Data...');

function showData() {
//   alert("Hii");
try{
    loader.innerHTML=
    root.appendChild(loader);

h2.innerText=`Welcome to DOM manipulation`;
img.src='https://tse1.mm.bing.net/th/id/OIP.-HaU96Rl5JtYVobGTROXBgHaHa?r=0&pid=Api&P=0&h=180';
img.setAttribute('height',200);
img.setAttribute('width',200);
h2.innerText=`ABES Engineering College`;

root.appendChild(h2);
root.appendChild(h3);
root.appendChild(img);
}
catch(e)
{
    console.log(e);
}
}
button.addEventListener("click", showData);
