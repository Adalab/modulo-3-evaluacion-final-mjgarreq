import HP from "../images/harry-potter-logo.png";
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
        <img src={HP} alt="Harry Potter Logo" className="header_logo"/>
    </header>
  )
}

export default Header