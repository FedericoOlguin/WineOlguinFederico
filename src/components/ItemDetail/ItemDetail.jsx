import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"



function ItemDetail({ prod }) {

    const [inCart, setInCart] = useState(false)

    function addToCart(cant) {
        // alert(`Has agregado ${cant} productos al carrito`)
        setInCart(true)
    }
    return (
        <div className="detalle">
            <h1 className="detalle__Title">Detalle</h1>
            <div className="dettalle__igmContainer">
                <img className="detalle__img" src={prod.pictureUrl} alt="imgProd" />
            </div>
            <div className="detalle__bodyContainer">
                <h2> {prod.title}</h2>
                <p>Price: ${prod.price}</p>
                <p>Stock: {prod.stock}u</p>

                <p>Description: {prod.description}</p>
                {inCart ? (
                    <>
                        <LinkRouter to="/cart" className="detalle__btn">Finalizar mi compra</LinkRouter>
                        <LinkRouter to="/" className="detalle__btn"> Seguir comprando </LinkRouter>
                    </>
                ) : (
                    <ItemCount stock={prod.stock} initial={1} addToCart={addToCart} />
                )}
            </div>
        </div>
    )
}

export default ItemDetail