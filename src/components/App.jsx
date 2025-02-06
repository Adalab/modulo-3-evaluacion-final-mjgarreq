import '../styles/App.scss';
import ls from "../services/localStorage";
import { useEffect, useState } from "react";
import Header from "./Header";
import callToApi from "../services/api";
import CharacterList from "./character/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./character/CharacterDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import ResetButton from './ResetButton';
import NotFound from './NotFound';


function App() {

  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("filterName",""));
  const [filterHouse, setFilterHouse] = useState(ls.get("filterHouse","gryffindor"));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""))


  useEffect (() => {
    callToApi(filterHouse).then((data) => {setCharacters(data)})
  }, [filterHouse])

  useEffect(() => {
    ls.set("filterHouse", filterHouse)
  }, [filterHouse]);

  useEffect(() => {
    ls.set("filterName", filterName)
  }, [filterName]);

  useEffect(() => {
    ls.set("filterGender", filterGender)
  }, [filterGender]);
  

  const filterCharacters = characters
  .filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase()))
  .filter((character) => filterHouse === "gryffindor" ? true : character.house.toLowerCase().includes(filterHouse))
  .filter((character) => filterGender ? character.gender === filterGender : true)

  const {pathname} = useLocation()
  const characterRoute = matchPath('/character/:idCharacter', pathname)
  const characterIdRoute = characterRoute ? characterRoute.params.idCharacter : null;
  const characterDetail = characters.find((character) => character.id === characterIdRoute)

  const resetInfo = () => {
    setFilterName("");
    setFilterHouse("gryffindor");
    setFilterGender("");  
  }

  const errorPage = "¡ERROR! La ruta a la que estás intentando acceder no existe, revisa el navegador.";
  const errorMsg = "¡ERROR! El personaje que estás buscado no existe.";
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={
        <>
          <Header />  

          <ResetButton resetInfo={resetInfo}/>

          <Filters filterName={filterName} setFilterName={setFilterName} filterHouse={filterHouse} setFilterHouse={setFilterHouse} filterGender={filterGender} setFilterGender={setFilterGender}/>
          
          {filterCharacters.length !==0 ? <CharacterList characters={filterCharacters}/> : <><section className='section-error'><p className='error-msg'>No hay ningún personaje con el nombre {filterName}, de la casa {filterHouse} y género {filterGender}</p></section></>} 
          
        </>
      }/>
      <Route path="/character/:idCharacter" element={
        <>
          
          {characterDetail ? <><Header /> <CharacterDetail data={characterDetail} errorText={errorPage}/></> : <NotFound errorText={errorMsg}/>}
        </>
      }/>  
      <Route path='*' element={<NotFound errorText={errorPage}/>}/>
      
    </Routes>
    </>
  );
}

export default App;
