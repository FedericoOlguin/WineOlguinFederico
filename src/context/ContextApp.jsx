import { createContext, useContext, useState } from "react";




const ContextApp = createContext([])

export const useContextApp = () => useContext(ContextApp)

const ContextAppProvider = ({ children }) => {
    // const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])

    function addToCart(prod) {
        if (isInCart(prod.id)) {
            let producto = cart.find(element => element.id === prod.id)
            if (producto.cantidad < producto.stock && producto.cantidad + prod.cantidad < producto.stock) {
                setCart([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.cantidad + prod.cantidad } : element)])
            } else {
                let agregar = producto.stock - producto.cantidad
                setCart([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.stock } : element)])
                alert("Solo se agregaron " + agregar + " productos al carrito debido a que no hay mas stock")
            }
        } else {
            setCart([...cart, prod])
        }
    }


    function deletToCart(id) {
        setCart(cart.filter(prod => prod.id !== id))
    }


    // console.log(cart);
    function isInCart(id) {
        return (cart?.find(element => element.id === id)) ? true : false
    }

    
    function emptyCart() {
        setCart([])
    }

    return (
        <ContextApp.Provider value={{
            cart,
            addToCart,
            deletToCart,
            isInCart,
            emptyCart
        }}>
            {children}
        </ContextApp.Provider >
    )
}

export default ContextAppProvider