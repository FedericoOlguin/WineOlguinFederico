import { useState, useEffect } from "react";
import Datos from "../../media/Datos"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
const getDatos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Datos)
    }, 2000)
})

function ItemDetailContainer() {

    const [data, setData] = useState()

    useEffect(() => {
        getDatos
            .then(res => setData(res.find(element => element.id === 1)))
            .catch(err => console.log(err))
            .finally(() => {
                console.log("final de promesa")
            })

    }, [])


    return (
        <>
            {console.log(data)}
            {
                data ?
                    <ItemDetail prod={data ? data : ""} /> :
                    <></>
            }
        </>
    )

}



export default ItemDetailContainer