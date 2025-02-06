import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Gryffindor from "../../images/icons8-gryffindor-30.png";
import Slytherin from "../../images/icons8-slytherin-30.png";
import Hufflepuff from "../../images/icons8-hufflepuff-30.png";
import Ravenclaw from "../../images/icons8-ravenclaw-30.png";
import "../../styles/CharacterDetail.scss";
import NotFound from "../NotFound";

function CharacterDetail({data, errorText}) {
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
            return <span key={name}> {name} |</span>
            })
           return otherNames 
        }
    }

    const checkHouse = () => {
        if (data.house === "Gryffindor") {
            return <>
            <p>Casa: {data.house}</p>
            <img src={Gryffindor} alt="imageHouse" className="house-img"/>
            </>
        } else if (data.house === "Slytherin") {
            return <>
            <p>Casa: {data.house}</p>
            <img src={Slytherin} alt="imageHouse" className="house-img"/>
            </>
        } else if (data.house === "Hufflepuff") {
            return <>
            <p>Casa: {data.house}</p>
            <img src={Hufflepuff} alt="imageHouse" className="house-img"/>
            </>
        } else {
            return <>
            <p>Casa: {data.house}</p>
            <img src={Ravenclaw} alt="imageHouse" className="house-img"/>
            </>
        }
    }
  return (
    <>
    {data ? 
        
        <>
        <section className="detail">
            <Link to="/" className="detail-link"><i className="fa-solid fa-angles-left"></i>Volver</Link>
            <article className="detail-article">
                <img src={data.img} alt="characterImage" className="detail-article_img"/>
                <div className="detail-article_div">
                    <h3>{data.name}</h3>
                    <article className="detail-article_house">
                        {checkHouse()}
                    </article>
                    <p>Género: {data.gender === "male" ? "hombre" : "mujer"}</p>
                    <p>Estatus: {data.alive
                        ?
                        <>vivo/a <i className="fa-solid fa-heart-pulse"></i></>
                        :
                        <>muerto/a <i className="fa-solid fa-heart-crack"></i></>
                    }</p>
                    {checkSpecie()}
                    {data.alternativeName.length !== 0 ? <p>Otros nombres: {checkAlternativeName()}</p> : null}
                </div>
            </article>
        </section>
        </>
    
        :

        <NotFound errorText={errorText}/>

    }
    </>
  )
}

CharacterDetail.propTypes = {
  data: PropTypes.object,
  errorText: PropTypes.string,
}

export default CharacterDetail