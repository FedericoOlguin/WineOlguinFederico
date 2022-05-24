import { useContextApp } from "../../context/ContextApp"
import ItemCart from "./itemCart"




function Cart() {
    const { cart, deletToCart, emptyCart } = useContextApp()

    function eliminar(id) {

        console.log(id);
        deletToCart(id)
    }

    return (
        <>
            <h1>Carrito de compras</h1>

            {cart?.map(prod =>
                <ItemCart key={prod.id} prod={prod} eliminar={eliminar} />
            )}


            <button onClick={() => emptyCart()}>Vaciar carrito</button>
        </>
    )
}


export default Cart