
import "./itemOrderContainer.css"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link as LinkRouter, useParams } from "react-router-dom";

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
                <div className="order__card">
                    <div className="div__right">
                        <p>Order id: {order?.id}</p>
                    </div>
                    <div className="div__left">
                        <h3>Customer Name: <span style={{ fontWeight: "400" }}> {order?.buyer.name} </span> </h3>
                        <h3>Customer Email: <span style={{ fontWeight: "400" }}> {order?.buyer.email} </span> </h3>
                    </div>
                    <table className="tabla__order" >
                        <tbody>
                            <tr>
                                <th>Product id:</th>
                                <th>Title:</th>
                                <th>Quantity:</th>
                                <th>Total per item:</th>
                            </tr>
                            {order?.productos.map((prod) => {
                                return (
                                    <tr key={prod.id}>
                                        <td> {prod.id}</td>
                                        <td> {prod.title}</td>
                                        <td>{prod.cantidad}</td>
                                        <td>{prod.totalItem}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="div__right">
                        <h2>Total: {order?.total} </h2>
                    </div>
                </div>
                <LinkRouter to="/" className="btn">Back to home</LinkRouter>
            </div>
        </div>
    )
}


export default ItemOrderContainer