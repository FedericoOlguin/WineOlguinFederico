import { useEffect, useState } from "react"
import ItemList from "../../components/Item/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore"
import PhotoHero from "../../assets/imagenes/HeroWine.jpg"



function ItemListContainer({ greeting }) {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = collection(db, "productos")
        const dbQueryFilter = (category ? query(dbQuery, where("categoria", "==", category)) : dbQuery)
        getDocs(dbQueryFilter)
            .then(res => {
                setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
            .catch(err => console.log(err))
    }, [category])

    return (
        <>
            <div className="hero">
                <img src={PhotoHero} alt="Botella vino" className="photoHero" />
                <h1 className="titleHero">{greeting}</h1>
            </div>
            <h2>Our wines</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer