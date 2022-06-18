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
            {props.stock ? (<>
                <div className="cart__botones">
                    <button className="btnCount restar" onClick={() => count > 1 && onAdd(false)} >-</button>
                    <h2>{count}</h2>
                    <button className="btnCount sumar" onClick={() => props.stock > count ? onAdd(true) : alert("No puedes agregar mas productos por falta de stock")} >+</button>
                </div>
                <button className="btn__add" onClick={() => props.agregar(count)}>Add to cart</button>
            </>
            ) :
                (
                    <>
                        <p className="sin__stock">- Sin stock -</p>
                    </>
                )
            }
        </div >
    )
}



export default ItemCount