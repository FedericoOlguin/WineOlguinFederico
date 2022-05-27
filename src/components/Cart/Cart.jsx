import { useContextApp } from "../../context/ContextApp"
import ItemCart from "./itemCart"
import "./cart.css"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link as LinkRouter } from "react-router-dom"


function Cart() {
    const { cart, deletToCart, emptyCart, totalCompra } = useContextApp()

    function eliminar(id) {
        // console.log(id);
        deletToCart(id)
    }


    return (
        <>
            <h1>Carrito de compras</h1>
            <div className="cartContainer">
                {cart.length < 1 ? (

                    <div className="cartContainer__checkout">
                        <h2>No hay productos en el carrito</h2>
                        <ProductionQuantityLimitsIcon className="imgCartEmpty" style={{ fontSize: "20rem" }} />
                        <LinkRouter to="/"> Seguir comprando</LinkRouter>
                    </div>

                ) : (
                    <>
                        <div className="cartContainer__products">
                            {cart?.map(prod =>
                                <ItemCart key={prod.id} prod={prod} eliminar={eliminar} />
                            )}
                        </div>
                        <div className="cartContainer__checkout">
                            <h2>Finalizar compra</h2>
                            <h3>Total: ${totalCompra()}</h3>
                            <div>
                                <button onClick={() => emptyCart()}>Vaciar carrito</button>
                                <button onClick={() => emptyCart()}>Pagar</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}


export default Cart