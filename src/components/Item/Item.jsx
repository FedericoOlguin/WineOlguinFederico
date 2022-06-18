import { Link as LinkRouter } from "react-router-dom"





function Item({ prod }) {

    return (
        <div className="producto">
            {prod.stock < 1 && <span className="soldOut">Sin Stock</span>}
            <h2>{prod.title}</h2>
            <div className="prueba">
                <img className="productoImg" src={prod.pictureUrl} alt="prodPhoto" />

            </div>
            <p>Price: ${prod.price}</p>
            {/* <p>Description: {prod.description}</p> */}
            <LinkRouter className="btn" to={`/item/${prod.id}`} >Detalle</LinkRouter>
        </div>
    )
}

export default Item