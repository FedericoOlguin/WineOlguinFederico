
import "./itemOrderContainer.css"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link as LinkRouter, useParams } from "react-router-dom";
import ItemOrder from "../../components/ItemOrder/ItemOrder";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";

function ItemOrderContainer() {
    const { idOrder } = useParams()
    const [order, setOrder] = useState()
    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "orders", idOrder)
        getDoc(dbQuery).then((res) => {
            setOrder({ id: res.id, ...res.data() })
        })
    }, [])

    return (
        <div className="order__container">
            <div className="div__container">
                <h2>Thanks for your purchase</h2>
                {order ? (
                    <ItemOrder order={order} />
                ) : (
                    <LoadingProgress />
                )}
                <LinkRouter to="/" className="btn">Back to home</LinkRouter>
            </div>
        </div>
    )
}


export default ItemOrderContainer