import { Link as LinkRouter } from "react-router-dom"





function Item({ prod }) {

    return (
        <div className="producto">
            <h2>{prod.title}</h2>
            <img className="productoImg" src={prod.pictureUrl} alt="prodPhoto" />
            <p>Price: ${prod.price}</p>
            {/* <p>Description: {prod.description}</p> */}
            <button> <LinkRouter to={`/item/${prod.id}`} >Detalle</LinkRouter></button>
        </div>
    )



}

export default Item