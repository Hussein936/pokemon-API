// apiLink = "https://pokeapi.co/api/v2/pokemon/" ;

// async function fetchData(Url){
//     try{
//     const response = await fetch(Url);
//     const data  = await response.json();
//     return data;
//     }
//     catch(error){
//         console.error("There is an error");
//         return null
//     }
// }


//   async function searchPokemon(){
//     let nameOfPoke = document.querySelector(".search").value;
//     let newUrl = `${apiLink}${nameOfPoke}`;
//     let newData = await fetchData(newUrl);
//     console.log(newData);

//     document.querySelector(".name").innerText = newData.name
//     document.querySelector(".num").innerText = newData.id
//     document.querySelector("#heightWeight").innerText = `Ht ${newData.height}m . Wt ${newData.weight}Kg`
//     document.querySelector(".sprite").setAttribute("src", newData.sprites.front_default)
    
//     console.log(newData.types)
//     document.querySelector(".types").innerHTML=""

//     for (let index = 0; index < newData.types.length; index++) {
//         let spanTypes = document.createElement('span');
//         spanTypes.classList.add('badge');
//         spanTypes.classList.add(`type-${newData.types[index].type.name}`);
//         spanTypes.innerText = newData.types[index].type.name;
//         document.querySelector(".types").appendChild(spanTypes)
            
//     }
// }
 
// document.querySelector("#getPoke").addEventListener("click",searchPokemon);




// const apiLink = "https://pokeapi.co/api/v2/pokemon/";


// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("There is an error");
//         return null; 
//     }
// }


// async function searchPokemon() {
//     const inputField = document.querySelector(".searchPoke");
//     const nameOfPoke = inputField.value;

//     const newUrl = `${apiLink}${nameOfPoke}`;
//     const newData = await fetchData(newUrl);
//     console.log(newData);

//     document.querySelector(".name").innerText = newData.name;
//     document.querySelector(".num").innerText = `#${newData.id}`;
//     document.querySelector(".sprite").setAttribute("src", newData.sprites.front_default);
//     document.querySelector(".he-we").innerHTML = `<span>Ht ${newData.height / 10}m · Wt ${newData.weight / 10}kg</span>`;

//     const typesContainer = document.querySelector(".types");
//     typesContainer.innerHTML = "";

//     newData.types.forEach(typeInfo => {
//         const spanTypes = document.createElement('span');
//         spanTypes.classList.add('badge', `type-${typeInfo.type.name}`);
//         spanTypes.innerText = typeInfo.type.name;
//         typesContainer.appendChild(spanTypes);
//     });

//     const card = document.querySelector(".card");
//     const mainType = newData.types[0].type.name;
//     const allTypes = newData.types.map(t => t.type.name).join(" ");
//     card.setAttribute("data-main", mainType);
//     card.setAttribute("data-type", allTypes);
// }

// document.querySelector("#getPoke").addEventListener("click", searchPokemon);

// apiLink = "https://pokeapi.co/api/v2/pokemon/" ;

// async function fetchData(Url){
//     try{
//     const response = await fetch(Url);
//     const data  = await response.json();
//     return data;
//     }
//     catch(error){
//         console.error("There is an error");
//         return null
//     }
// }


//   async function searchPokemon(){
//     let nameOfPoke = document.querySelector(".search").value;
//     let newUrl = `${apiLink}${nameOfPoke}`;
//     let newData = await fetchData(newUrl);
//     console.log(newData);

//     document.querySelector(".name").innerText = newData.name
//     document.querySelector(".num").innerText = newData.id
//     document.querySelector("#heightWeight").innerText = `Ht ${newData.height}m . Wt ${newData.weight}Kg`
//     document.querySelector(".sprite").setAttribute("src", newData.sprites.front_default)
    
//     console.log(newData.types)
//     document.querySelector(".types").innerHTML=""

//     for (let index = 0; index < newData.types.length; index++) {
//         let spanTypes = document.createElement('span');
//         spanTypes.classList.add('badge');
//         spanTypes.classList.add(`type-${newData.types[index].type.name}`);
//         spanTypes.innerText = newData.types[index].type.name;
//         document.querySelector(".types").appendChild(spanTypes)
            
//     }
// }
 
// document.querySelector("#getPoke").addEventListener("click",searchPokemon);




const apiLink = "https://pokeapi.co/api/v2/pokemon/";


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There is an error");
        return null; 
    }
}


async function searchPokemon() {
    const inputField = document.querySelector(".searchPoke");
    const nameOfPoke = inputField.value;

    const newUrl = `${apiLink}${nameOfPoke}`;
    const newData = await fetchData(newUrl);
    console.log(newData);

    document.querySelector(".name").innerText = newData.name;
    document.querySelector(".num").innerText = `#${newData.id}`;
    document.querySelector(".sprite").setAttribute("src", newData.sprites.front_default);
    document.querySelector(".he-we").innerHTML = `<span>Ht ${newData.height / 10}m · Wt ${newData.weight / 10}kg</span>`;

    const typesContainer = document.querySelector(".types");
    typesContainer.innerHTML = "";

    newData.types.forEach(typeInfo => {
        const spanTypes = document.createElement('span');
        spanTypes.classList.add('badge', `type-${typeInfo.type.name}`);
        spanTypes.innerText = typeInfo.type.name;
        typesContainer.appendChild(spanTypes);
    });

}

document.querySelector("#getPoke").addEventListener("click", searchPokemon);