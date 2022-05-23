import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"



function ItemDetail({ prod, addToCart }) {

    return (
        <div className="detalle">
            <h1 className="detalle__Title">Detalle</h1>
            <div className="dettalle__igmContainer">
                <img className="detalle__img" src={prod.pictureUrl} alt="imgProd" />
            </div>
            <div className="detalle__bodyContainer">
                <h2>Nombre: {prod.title}</h2>
                <p>Price: ${prod.price}</p>
                <p>Stock: {prod.stock}u</p>

                <p>Description: {prod.description}</p>

                <ItemCount stock={prod.stock} initial={1} addToCart={addToCart} />
            </div>
        </div>
    )
}

export default ItemDetail