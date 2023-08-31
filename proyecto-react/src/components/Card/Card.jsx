import './Card.css';
import CardImg from "./CardImg";
import CardColores from "./CardColores";
import CardPrecio from "./CardPrecio";
import CardTitulo from "./CardTitulo";
import CardCuotas from "./CardCuotas";

const Card = ({producto}) => {

    return (
        <div className='card'>
            <CardImg img={producto.img}/>
            <CardTitulo titulo={producto.titulo}/>
            <CardPrecio precio={producto.precio}/>
            <CardCuotas cuotas={producto.cuotas}/>
            <CardColores colores={producto.colores}/>
        </div>
    )
}

export default Card;