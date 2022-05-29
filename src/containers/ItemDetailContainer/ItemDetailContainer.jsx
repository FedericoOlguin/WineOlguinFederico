import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import { useContextApp } from "../../context/ContextApp";
import { getDoc, getFirestore, doc } from "firebase/firestore"




function ItemDetailContainer() {
    const { id } = useParams()
    const [data, setData] = useState("id")
    // const { productos } = useContextApp()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "productos", id)
        getDoc(dbQuery).then(res => {
            setData({ id: res.id, ...res.data() })
        })

    }, [])



    return (
        <>
            {/* {console.log(data)} */}
            {data ?
                <ItemDetail prod={data ? data : ""} /> : <></>}
        </>
    )

}



export default ItemDetailContainer