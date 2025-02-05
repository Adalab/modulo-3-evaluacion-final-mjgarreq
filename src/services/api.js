const callToApi = (valueHouse) => {
    // Llamamos a la API
    return fetch(`https://hp-api.onrender.com/api/characters/house/${valueHouse}`) 
      .then((response) => response.json())
      .then((data) => {
        // Cuando responde la API podemos limpiar los datos aquí
        return data.map((character) => {
          return {
            img: character.image !== "" ? character.image : "https://placehold.co/210x295/90EE90/FFF/?text=Expecto%20Patronum",
            name: character.name,
            alternativeName: character.alternate_names,
            specie: character.species,
            gender: character.gender,
            id: character.id,
            house: character.house,
            alive: character.alive,
          }
        })
      });
  };
  
  export default callToApi;