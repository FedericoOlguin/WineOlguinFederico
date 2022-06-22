import Item from "./Item";
import "./item.css"
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress"


function ItemList(props) {

    return (
        <div className="contenedorItemList">
            {
                props.products.length === 0 ?
                    <div>
                        <LoadingProgress />
                    </div> :
                    props.products.map(prod => <Item prod={prod} key={prod.id} />)
            }
        </div>
    )
}

export default ItemList