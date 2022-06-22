import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore"



function ItemDetailContainer() {
    const { id } = useParams()
    const [data, setData] = useState("id")

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "productos", id)
        getDoc(dbQuery).then(res => {
            setData({ id: res.id, ...res.data() })
        })
    }, [])

    return (
        <div className="detalle__container">
            {data ?
                <ItemDetail prod={data ? data : ""} /> : <></>}
        </div>
    )

}



export default ItemDetailContainer