
const search = (e) => {
  const srch = getElementById('search')
  const srchValue = srch.value
  
  const dataSec = data[1];

  const dataFiltered = dataSec.filter(char => char.nombre.includes(srchValue) || char.título.includes(srchValue) || char.fecha.includes(srchValue))


console.log(dataFiltered);

console.log(e.target);

}


let speech = '';
console.log(data);
data[1].forEach((charla)=>{
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

