import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/Character.scss"

function Character({data}) {
  return (
    <Link className="charactersection-link" to={`/character/${data.id}`}>
      <article className="charactersection-article">
        <img src={data.img} alt="imageCharacter" className="charactersection-article_img"/>
        <h3 className="charactersection-article_name">{data.name}</h3>
        <p className="charactersection-article_specie">{data.specie}</p>
      </article>
    </Link>
  )
}

Character.propTypes = {
  data: PropTypes.object,
}

export default Character