
import "./itemCart.css"



function ItemCart({ prod, eliminar }) {

    return (
        <div className="itemCart">
            <div className="itemCart__igmContainer">
                <img src={prod.pictureUrl} alt="imgProd" />
            </div>
            <div className="itemCart__bodyContainer">
                <h2 className="itemCart__h2"> {prod.title}</h2>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Price: ${prod.price}</p>
                <p>Stock: {prod.stock}u</p>
                <button onClick={() => eliminar(prod.id)}>Eliminar del carrito</button>

            </div>
        </div>
    )
}


export default ItemCart