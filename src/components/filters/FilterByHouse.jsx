import PropTypes from "prop-types";

function FilterByHouse({filterHouse, setFilterHouse}) {

  const handleSelect = (ev) => {
    const valueHouse = ev.target.value;
    setFilterHouse(valueHouse); 
  }

  return (
    <div>
      <label htmlFor="house">Selecciona una casa: </label>
      <select name="house" id="house" className="form-select" value={filterHouse} onChange={handleSelect}>
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
    </div>
  )
}

FilterByHouse.propTypes = {
  filterHouse: PropTypes.string,
  setFilterHouse: PropTypes.func
}

export default FilterByHouse