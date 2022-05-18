import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Datos from "../../media/Datos"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
const getDatos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Datos)
    }, 2000)
})

function ItemDetailContainer() {
    const { id } = useParams()
    console.log(id);
    const [data, setData] = useState("id")

    useEffect(() => {
        getDatos
            .then(res => setData(res.find(element => element.id.toString() === id)))
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