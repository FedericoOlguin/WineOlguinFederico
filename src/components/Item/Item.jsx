




function Item({ prod }) {

    return (
        <div className="producto">
            <h2>{prod.title}</h2>
            <img className="productoImg" src={prod.pictureUrl} alt="prodPhoto" />
            <p>Price: ${prod.price}</p>
            <p>Description: {prod.description}</p>
        </div>
    )



}

export default Item