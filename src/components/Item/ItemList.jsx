import Item from "./Item";
import "./item.css"



function ItemList(props) {

    return (

        <div className="contenedorItemList">

            {
                props.productos.length === 0 ?
                    <>
                        <h1>Loading...</h1>

                    </> :
                    props.productos.map(prod =>
                        <Item prod={prod} key={prod.id} />

                    )

            }

        </div>
    )


}


export default ItemList