
import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer({ greeting }) {

    function addToCart(cant) {

        alert(`Has agregado ${cant} productos al carrito`)

    }



    return (
        <>
            <h1>{greeting}</h1>

            <ItemCount stock={10} initial={1} addToCart={addToCart} />
        </>
    )

}

export default ItemListContainer