import Character from "./Character";
import PropTypes from "prop-types";

function CharacterList({characters}) {
  console.log(characters)
  const infoHtml = characters.map((character) => <Character key={character.id} data={character}/>)

  return (
    <section className="charactersection">{infoHtml}</section>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
}

export default CharacterList