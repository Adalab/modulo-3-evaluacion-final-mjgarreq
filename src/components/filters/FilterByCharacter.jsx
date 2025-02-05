import PropTypes from "prop-types";

function FilterByCharacter({filterName, setFilterName}) {

  const handleInput = (ev) => {
    const valueName = ev.target.value;
    setFilterName(valueName.toLowerCase())
  }

  return (
    <section className="form-name">
      <label htmlFor="name"></label>
      <input type="text" name="name" id="name" placeholder="Busca un personaje" value={filterName} onChange={handleInput}/>
    </section>
  )
}

FilterByCharacter.propTypes = {
  filterName: PropTypes.string,
  setFilterName: PropTypes.func,
}

export default FilterByCharacter