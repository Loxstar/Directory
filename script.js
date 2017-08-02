const container = document.querySelector(".container");
let directory=""; 
for(let i=0; i<customers.results.length; i++){



directory += `<div><img src= ${customers.results[i].picture.large}>



<p>${customers.results[i].gender}</p>

<p>${customers.results[i].name.title} 
${customers.results[i].name.first} 
${customers.results[i].name.last}</p>

<p>${customers.results[i].location.street}</p>

<p>${customers.results[i].email}</p>

<p>${customers.results[i].phone}</p>

<p></p>


</div>



`;
}



console.log(customers);


container.innerHTML = directory;
