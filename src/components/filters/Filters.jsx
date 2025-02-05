import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";
import "../../styles/Form.scss"

function Filters({filterName, setFilterName, filterHouse, setFilterHouse}) {

  const handleForm = (ev) => {
    ev.preventDefault();
  }

  return (
    <form method="get" className="form" onSubmit={handleForm}>
      <FilterByCharacter filterName={filterName} setFilterName={setFilterName} />
      <FilterByHouse filterHouse={filterHouse} setFilterHouse={setFilterHouse}/>
    </form>
  )
}

Filters.propTypes = {
  filterName: PropTypes.string,
  setFilterName: PropTypes.func,
  filterHouse: PropTypes.string,
  setFilterHouse: PropTypes.func
}

export default Filters