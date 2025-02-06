const callToApi = (valueHouse) => {
    // Llamamos a la API
    return fetch(`https://hp-api.onrender.com/api/characters/house/${valueHouse}`) 
      .then((response) => response.json())
      .then((data) => {
        // Cuando responde la API podemos limpiar los datos aquí
        return data.map((character) => {

          
          return {
            img: character.image !== "" ? character.image : "https://placehold.co/210x295/C6EBC6/FFF/?text=Expecto%20Patronum",
            name: character.name,
            alternativeName: character.alternate_names,
            specie: character.species,
            gender: character.gender,
            id: character.id,
            house: character.house,
            alive: character.alive,
          }
        })
      })
      .then((data) => {
        return data.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      })
  };
  
  export default callToApi;