import Error from "../images/error.jpg";
import "../styles/NotFound.scss";

function NotFound({errorText}) {
    
  return (
    <>
        <header className="header-notFound">
            <img src={Error} alt="" />
        </header>
        <main className="main-notFound">
            <p className="main-notFound-p">{errorText}</p>
        </main>
    </>
  )
}

export default NotFound