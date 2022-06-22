import "./itemCart.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function ItemCart({ prod, eliminar }) {
    return (
        <div className="itemCart">
            <div className="itemCart__igmContainer">
                <img src={prod.pictureUrl} alt="imgProd" />
            </div>
            <div className="itemCart__bodyContainer">
                <h2 className="itemCart__h2"> {prod.title}</h2>
                <p>Quantity: <span style={{ color: "white" }}> {prod.cantidad}u </span></p>
                <p>Price: ${prod.price}</p>
                <p>Stock: {prod.stock}u</p>
                <div>
                    <DeleteOutlineIcon className="buttonDeleteItem" onClick={() => eliminar(prod.id)} />
                </div>
            </div>
        </div>
    )
}


export default ItemCart