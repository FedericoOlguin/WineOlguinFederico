
import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../Item/ItemList"


const productos = [
    { id: 1, title: "Campera gris", description: "Campera de corte Slim de algodon marca Rabonera", price: 5000, pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/141/701/products/campera-rabonera-basica-gris1-1557878a1c5fe4ddb015946485966599-1024-1024.jpg" },
    { id: 2, title: "Campera blanca", description: "Campera de corte Slim de algodon marca Rabonera", price: 8000, pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/141/701/products/campera-fluence-jpg1-57596e3d6e95d63ae815947418873923-480-0.jpg" },
    { id: 3, title: "Campera amarilla", description: "Campera de corte Slim de algodon marca Rabonera", price: 6000, pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/141/701/products/campera-rabonera-basica-amarilla1-e7571dbab7b22af86115920036179587-480-0.jpg" },
    { id: 4, title: "Pantalon Beige", description: "Pantalon Beige gabardina", price: 10000, pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/141/701/products/12-21-dbcfb093d311e8c83b15221892452428-480-0.jpg" },
    { id: 5, title: "Pantalon Beige", description: "Pantalon Gris Topo gabardina", price: 11000, pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/141/701/products/14-11-ec09b181c7cbf5bf0b15451446436338-480-0.jpg" },
]



const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
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
    }, [])

    function addToCart(cant) {
        alert(`Has agregado ${cant} productos al carrito`)
    }

    console.log(productos);

    return (
        <>
            <h1>{greeting}</h1>

            <ItemCount stock={10} initial={1} addToCart={addToCart} />
            <ItemList productos={productos} />
        </>
    )

}

export default ItemListContainer