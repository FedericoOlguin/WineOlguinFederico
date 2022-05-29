import Item from "./Item";
import "./item.css"
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress"


function ItemList(props) {

    return (
        <div className="contenedorItemList">
            {
                props.productos.length === 0 ?
                    <div>
                        <LoadingProgress />
                    </div> :
                    props.productos.map(prod => <Item prod={prod} key={prod.id} />)
            }
        </div>
    )
}

export default ItemList