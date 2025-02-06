import PropTypes from "prop-types";

function FilterByGender({filterGender, setFilterGender}) {

    const handleGender = (ev) => {
        const valueGender = ev.target.value;
        setFilterGender(valueGender); 
    }

  return (
    <div className="form-gender">
        <select name="gender" id="gender" onChange={handleGender} value={filterGender} className="form-select">
            <option value="">Seleccione género</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
        </select>
    </div>
  )
}

FilterByGender.propTypes = {
  filterGender: PropTypes.string,
  setFilterGender: PropTypes.func,
}

export default FilterByGender