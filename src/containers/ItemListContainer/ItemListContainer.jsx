
import { useEffect, useState } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import ItemList from "../../components/Item/ItemList"
import Datos from "../../media/Datos"
import { useParams } from "react-router-dom"


const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Datos)
    }, 2000)
})




function ItemListContainer({ greeting }) {
    const {categ} = useParams()
    const [productos, setProductos] = useState([])
    // const [reload, settReload] = useState(false)
    // console.log(categ);
    useEffect(() => {

        if (categ) {

            fetchPromise
                .then(res => setProductos(res.filter(element => element.categoria === categ)))
                .catch(err => console.log(err))
                .finally(() => {
                    // settReload(!reload)
                    console.log("final de promesa")
                })
        } else {
            fetchPromise
                .then(res => setProductos(res))
                .catch(err => console.log(err))
                .finally(() => {
                    // settReload(!reload)
                    // console.log("final de promesa")
                })
        }


    }, [categ])

    // function addToCart(cant) {
    //     alert(`Has agregado ${cant} productos al carrito`)
    // }

    // console.log(productos);

    return (
        <>
            <h1>{greeting}</h1>

            {/* <ItemCount stock={10} initial={1} addToCart={addToCart} /> */}
            <ItemList productos={productos} />
        </>
    )

}

export default ItemListContainer