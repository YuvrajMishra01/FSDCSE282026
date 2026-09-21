const constainer=document.getElementById('root');
console.log(constainer);
const root=ReactDOM.createRoot(constainer);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React');
root.render(h2);
const h1=React.createElement('h1',{style:{color:'brown',backgroundColor:'white'}},'ABES Engineering College');
root.render(h1);
const img = React.createElement("img", {
  src: "https://tse2.mm.bing.net/th/id/OIP.rusG4stRebiWDDiUaCnvKQHaHa?r=0&pid=Api&P=0&h=180",
  style: { height: "35%", width: "20%", borderRadius: "20px" },
});
const h3=React.createElement('h3',{style:{color:'green',padding:100,margin:20}},'Yuvraj Mishra');
const div=React.createElement('div',{style:{border:'2px dotted black',height:'200px',width:'400px' }},h1,h2,img,h3);
root.render(div);
