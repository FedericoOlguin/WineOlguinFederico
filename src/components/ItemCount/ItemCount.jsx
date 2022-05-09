import { useState } from "react"
import "./itemCount.css"



function ItemCount(props) {

    const [count, setCount] = useState(props.initial)

    function onAdd(condition) {
        if (condition) {
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className="card">
            <h2>Nombre Producto</h2>
            <p>Stock: {props.stock}</p>
            <div className="cart__botones">
                <button onClick={() => count > 1 && onAdd(false)} >-</button>
                <h2>{count}</h2>
                <button onClick={() => props.stock > count ? onAdd(true) : alert("No puedes agregar mas productos por falta de stock")} >+</button>
            </div>
            <button onClick={() => props.addToCart(count)}>Add to cart</button>
        </div>
    )
}



export default ItemCount