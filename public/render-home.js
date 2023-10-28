
const dataSec = data[1];
let dataFiltered = [...dataSec] 

const search = () => {
  
  const srch = document.getElementById('search')
  const srchValue = srch.value
  
  if(srchValue){
    
   dataFiltered = dataSec.filter(char => char.orador.includes(srchValue) || char.título.includes(srchValue))

}else {

   dataFiltered
}
console.log(dataFiltered);


let speech = '';
console.log(data);
dataFiltered.forEach((charla)=>{
speech = speech + `
<article class="col">
<a href='detail-page/detail-page.html?id=${charla.id}'>
<div class="card" style="width: 18rem;">
<img src=${charla.imagen} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${charla.título}</h5>  
</div>
</div>
</a>
</article>
    `          

})

document.getElementById('main').innerHTML = speech;

document.getElementById('formulario').addEventListener('submit', (event)=>{
  event.preventDefault()
search()
 
})



}

search()
