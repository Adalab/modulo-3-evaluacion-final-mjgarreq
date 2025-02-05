import { Link } from "react-router-dom"
import PropTypes from "prop-types";


function CharacterDetail({data}) {
    const checkSpecie = () => {
        if (data.specie === "human") {
            return <p>Especie: humano/a <i className="fa-solid fa-person-half-dress"></i></p>
        } else if (data.specie === "ghost") {
            return <p>Especie: fantasma <i className="fa-solid fa-ghost"></i></p>
        } else if (data.specie === "half-giant") {
            return <p>Especie: mitad gigante <i className="fa-solid fa-person-half-dress fa-2xl"></i></p>
        } else if (data.specie === "werewolf") {
            return <p>Especie: hombre lobo <i className="fa-brands fa-wolf-pack-battalion"></i></p>
        }
    }

    const checkAlternativeName = () =>{
        if (data.alternativeName) {
            const otherNames = data.alternativeName.map((name) => {
            return <>
                    <ul>
                        <li>{name}</li>
                    </ul>
                </>
            })
           return otherNames 
        }
    }

  return (
    <section className="detail">
        <Link to="/">Volver</Link>
        <article className="detail-article">
            <img src={data.img} alt="characterImage" />
            <h3>{data.name}</h3>
            <p>Género: {data.gender === "male" ? "hombre" : "mujer"}</p>
            <p>Casa: {data.house}</p>
            <p>Estatus: {data.alive 
                ?  
                <>vivo/a <i className="fa-solid fa-heart-pulse"></i></>
                : 
                <>muerto/a <i className="fa-solid fa-heart-crack"></i></>
            }</p>
            {checkSpecie()}
            {data.alternativeName.length !== 0 ? <p>Otros nombres: {checkAlternativeName()}</p> : null}
        </article>
    </section>
  )
}

CharacterDetail.propTypes = {
  data: PropTypes.object,
}

export default CharacterDetail