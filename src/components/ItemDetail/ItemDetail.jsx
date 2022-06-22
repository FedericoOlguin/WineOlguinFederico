import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { useContextApp } from "../../context/ContextApp"
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress"



function ItemDetail({ prod }) {
    const { addToCart } = useContextApp()
    const [inCart, setInCart] = useState(false)

    function agregar(cant) {
        setInCart(true)
        addToCart({ ...prod, cantidad: cant })
    }

    return (
        <>
            {prod !== "id" ? (
                <div className="detalle">
                    <h1 className="detalle__Title">Detail</h1>
                    <div className="dettalle__igmContainer">
                        <img className="detalle__img" src={prod.pictureUrl} alt="imgProd" />
                    </div>
                    <div className="detalle__bodyContainer">
                        <h2> {prod.title}</h2>
                        <p> {prod.description}</p>
                        <div className="div__row">
                            <p>Price: ${prod.price}</p>
                            <p>Stock: {prod.stock}u</p>
                        </div>
                        {inCart ? (
                            <>
                                <LinkRouter to="/cart" className="detalle__btn">Checkout</LinkRouter>
                                <LinkRouter to="/" className="detalle__btn"> Keep buying </LinkRouter>
                            </>
                        ) : (
                            <ItemCount stock={prod.stock} initial={1} agregar={agregar} />
                        )}
                    </div>
                </div>
            ) : (
                <>
                    <LoadingProgress />
                </>
            )}
        </>
    )
}

export default ItemDetail