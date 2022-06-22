import "./itemOrder.css"


function ItemOrder({ order }) {


    return (
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
                        <th className="hidden">Product id:</th>
                        <th>Title:</th>
                        <th>Quantity:</th>
                        <th>Total per item:</th>
                    </tr>
                    {order?.productos.map((prod) => {
                        return (
                            <tr key={prod.id}>
                                <td className="hidden"> {prod.id}</td>
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
    )
}


export default ItemOrder