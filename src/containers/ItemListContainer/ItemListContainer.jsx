import { useEffect, useState } from "react"
import ItemList from "../../components/Item/ItemList"
import Datos from "../../assets/Datos"
import { useParams } from "react-router-dom"



const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Datos)
    }, 2000)
})


function ItemListContainer({ greeting }) {
    const { categ } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (categ) {
            fetchPromise
                .then(res => setProductos(res.filter(element => element.categoria === categ)))
                .catch(err => console.log(err))
                .finally(() => {
                    // console.log("final de promesa")
                })
            } else {
                fetchPromise
                .then(res => setProductos(res))
                .catch(err => console.log(err))
                .finally(() => {
                    // console.log("final de promesa")
                })
        }
    }, [categ])


    return (
        <>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer