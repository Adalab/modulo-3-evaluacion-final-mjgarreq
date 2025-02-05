// import '../styles/App.scss';
//import callToApi from "../services/api";
import ls from "../services/localStorage";

import { useEffect, useState } from "react";
import Header from "./Header";
import callToApi from "../services/api";
import CharacterList from "./character-list/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./CharacterDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";

function App() {

  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("filterName",""));
  const [filterHouse, setFilterHouse] = useState(ls.get("filterHouse","gryffindor"));

  useEffect (() => {
    callToApi(filterHouse).then((data) => {setCharacters(data)})
  }, [filterHouse])

  useEffect(() => {
    ls.set("filterHouse", filterHouse)
  }, [filterHouse]);

  useEffect(() => {
    ls.set("filterName", filterName)
  }, [filterName]);


  const filterCharacters = characters
  .filter((character) => character.name.toLowerCase().includes(filterName))
  .filter((character) => filterHouse === "gryffindor" ? true : character.house.toLowerCase().includes(filterHouse))

  const {pathname} = useLocation()
  const characterRoute = matchPath('/character/:idCharacter', pathname)
  const characterIdRoute = characterRoute ? characterRoute.params.idCharacter : null;
  const characterDetail = characters.find((character) => character.id === characterIdRoute)
  console.log(characterDetail)
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          
          <Filters filterName={filterName} setFilterName={setFilterName} filterHouse={filterHouse} setFilterHouse={setFilterHouse}/>
           <CharacterList characters={filterCharacters}/>
        </>
      }/>
      <Route path="/character/:idCharacter" element={<CharacterDetail data={characterDetail}/>}/>
    </Routes>
    </>
  );
}

export default App;
