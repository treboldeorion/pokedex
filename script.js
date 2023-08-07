const url = "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json"

const busqueda = async () =>{
    let pokebusqueda = document.getElementById("pokebusqueda").value
    const respuesta = await fetch (`${url}`);
    const respuesta2= await respuesta.json();
    await dibujar(respuesta2);
    let buscador = buscar ("pokebusqueda", respuesta2)
    console.log(buscador)
}

const dibujar = (pokemon)=>{
    document.querySelector("#resultado").innerHTML=""
    for(let i in pokemon){
    let div = document.createElement("div");
    div.classList.add("column","is-2","ml-5");
    div.innerHTML+=`
    <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src=${pokemon[i].ThumbnailImage} alt=${pokemon[i].ThumbnailImage}>
      </figure>
    </div>
    <div class="card-content">
        <div class="media-content">
          <p class="title is-4">${pokemon[i].name}</p>
          <p class="subtitle is-6">${pokemon[i].abilities}</p>
        </div>
      </div>
    </div>`
  
  div.addEventListener("click",function(){
    alert(pokemon[i].weakness);
  })



  document.querySelector("#resultado").appendChild(div);
    }
}

function buscar(nombre,pokemones){
  let respuesta3 = pokemones.filter(function (pokemon) {
    console.log(pokemones.name)
    return pokemon.name == nombre
  }) 
  return respuesta3
}

let boton = document.querySelector("#busqueda");
boton.addEventListener("click", busqueda);
let input = document.querySelector("#pokebusqueda");
input.addEventListener("keypress",busqueda);



/*    <div class="column is-3 ml-5">

<div class="card">
   <div class="card-image">
     <figure class="image is-4by3">
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="Placeholder image">
     </figure>
   </div>
   <div class="card-content">
       <div class="media-content">
         <p class="title is-4">Bulbasaur</p>
         <p class="subtitle is-6">Overgrow</p>
       </div>*/