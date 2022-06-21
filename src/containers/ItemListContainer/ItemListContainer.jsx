import { useEffect, useState } from "react"
import ItemList from "../../components/Item/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore"
import FotoHero from "../../assets/imagenes/HeroWine.jpg"



function ItemListContainer({ greeting }) {
    const { categ } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        if (categ) {
            const dbQuery = collection(db, "productos")
            const dbQueryFilter = query(dbQuery, where("categoria", "==", categ))

            getDocs(dbQueryFilter).then(res => {
                setProductos(res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
                .catch(err => console.log(err))
        } else {
            const dbQuery = collection(db, "productos")
            getDocs(dbQuery).then(res => {
                setProductos(res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
                .catch(err => console.log(err))
        }
    }, [categ])

    return (
        <>
            <div className="hero">
                <img src={FotoHero} alt="" className="photoHero" />
                <h1 className="titleHero">{greeting}</h1>
            </div>
            <h2>Our wines</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer