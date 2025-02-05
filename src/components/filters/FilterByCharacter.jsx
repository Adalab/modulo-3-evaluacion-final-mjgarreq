import PropTypes from "prop-types";

function FilterByCharacter({filterName, setFilterName}) {

  const handleInput = (ev) => {
    const valueName = ev.target.value;
    setFilterName(valueName)
  }

  return (
    <section className="form-name">
      <label htmlFor="name">Busca un personaje: </label>
      <input type="text" name="name" id="name" placeholder="Harry Potter" value={filterName} onChange={handleInput} className="form-name_input"/>
    </section>
  )
}

FilterByCharacter.propTypes = {
  filterName: PropTypes.string,
  setFilterName: PropTypes.func,
}

export default FilterByCharacter