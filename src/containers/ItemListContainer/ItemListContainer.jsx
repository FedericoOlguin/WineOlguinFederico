
import { useEffect, useState } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import ItemList from "../../components/Item/ItemList"
import Datos from "../../media/Datos"


const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Datos)
    }, 2000)
})




function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([])
    const [reload, settReload] = useState(false)

    useEffect(() => {
        fetchPromise
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => {
                settReload(!reload)
                console.log("final de promesa")
            })

    }, [reload])

    function addToCart(cant) {
        alert(`Has agregado ${cant} productos al carrito`)
    }

    // console.log(productos);

    return (
        <>
            <h1>{greeting}</h1>

            <ItemCount stock={10} initial={1} addToCart={addToCart} />
            <ItemList productos={productos} />
        </>
    )

}

export default ItemListContainer