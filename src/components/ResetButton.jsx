import PropTypes from "prop-types";
import "../styles/ResetButton.scss";

function ResetButton({resetInfo}) {

    const handleClick = (ev) => {
        ev.preventDefault();
        resetInfo();
    }

  return (
    <div className="buttonDiv"><button onClick={handleClick} className="buttonReset">Reset</button></div>
  )
}

ResetButton.propTypes = {
  resetInfo: PropTypes.func,
}

export default ResetButton