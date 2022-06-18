import { useContextApp } from "../../context/ContextApp"
import ItemCart from "../../components/ItemCart/itemCart"
import "./cart.css"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link as LinkRouter } from "react-router-dom"
import { getFirestore, writeBatch, addDoc, collection, query, where, documentId, getDocs } from "firebase/firestore"
import FormCart from "../../components/FormCart/FormCart";
import { useState } from "react";

function Cart() {
    const { cart, deletToCart, emptyCart, totalCompra } = useContextApp()
    const [buyer, setBuyer] = useState()


    function eliminar(id) {
        // console.log(id);
        deletToCart(id)
    }

    async function addOrden() {
        let order = {
            buyer: { ...buyer },
            // buyer: { name: "Federico", email: "ejemplo@gmail.com", phone: "265432195" },
            total: totalCompra(),
            productos: cart.map(prod => {
                return {
                    id: prod.id,
                    title: prod.title,
                    unitPrice: prod.price,
                    totalItem: prod.price * prod.cantidad,
                    cantidad: prod.cantidad
                }
            })
        }

        const db = getFirestore()

        let queryDb = collection(db, "orders")
        addDoc(queryDb, order)
            .then(res => {
                alert("Pedido realizado con exito. Codigo de operacion: " + res.id)
            })
            .catch((err) => console.log(err))
            .finally((res) => {
                emptyCart()
            })

        const queryCollectionStock = collection(db, "productos")
        const queryUpdateStock = query(queryCollectionStock,
            where(documentId(), "in", cart.map(p => p.id)))
        const batch = writeBatch(db)
        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cart.find(prod => prod.id === res.id).cantidad })))
        batch.commit()
            .catch(err => console.log(err))
    }

    return (
        <>
            {/* {console.log(buyer)} */}
            <h1>Shopping cart</h1>
            <div className="cartContainer">
                {cart.length < 1 ? (

                    <div className="cartContainer__checkout">
                        <ProductionQuantityLimitsIcon className="imgCartEmpty" style={{ fontSize: "20rem" }} />
                        <h2>Cart is empty</h2>
                        <LinkRouter to="/" className="aTienda"> Keep shopping</LinkRouter>
                    </div>

                ) : (
                    <>
                        <div className="cartContainer__products">
                            {cart?.map(prod =>
                                <ItemCart key={prod.id} prod={prod} eliminar={eliminar} />
                            )}
                            <button className="btn" onClick={() => emptyCart()}>Empty cart</button>
                        </div>
                        <div className="cartContainer__checkout">
                            <h2>Checkout</h2>
                            <h3>Total: ${totalCompra()}</h3>

                            {buyer === undefined ? (
                                <FormCart setBuyer={setBuyer} />
                            ) : (
                                <div >
                                    <button onClick={() => addOrden()} >Go to checkout</button>
                                </div>
                            )}

                        </div>
                    </>
                )}
            </div>
        </>
    )
}


export default Cart