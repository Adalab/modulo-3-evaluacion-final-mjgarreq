import { Link } from "react-router-dom";
import Error from "../images/error.jpg";
import "../styles/NotFound.scss";
import PropTypes from "prop-types";

function NotFound({errorText}) {
    
  return (
    <>
        <header className="header-notFound">
            <img src={Error} alt="" />
        </header>
        
        <main className="main-notFound">
        <Link to="/" className="detail-link"><i className="fa-solid fa-angles-left"></i>Volver</Link>
            <p className="main-notFound-p">{errorText}</p>
        </main>
    </>
  )
}

NotFound.propTypes = {
  errorText: PropTypes.string,
}

export default NotFound