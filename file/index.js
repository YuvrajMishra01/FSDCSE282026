const root = document.getElementById(`container`);
console.log(root)
const btn =document.getElementById(`btn`);
console.log(btn);
  function getData(){
    // alert("hii");
   const serverData=await fetch(`https://fakestoreapi.com/products/1`);
   const jsonData= await serverData.json();  
   let table =`<table border=`2px`>
   ${
    `<tr>
      <td><img src=$(ele.image) height=200 width=200></img></td>
      <td>$(ele.id)</td>
      <td>$(ele.title)</td>
      <td>$(ele.price)</td>
    </tr>`
   })
  }
  </table>`
  h1.innerHTML=table;
  root.appendChild(h1);
  }catch(e){
    console.log("Hiii")
    h1.innerHTML="Error in loading"
  }
  finally{
    root.removeChild(loader); 
  }
   root.innerHTML=`<h1>${jsonData.title}</h1>`;
}
btn.addEventListener("click",getData);