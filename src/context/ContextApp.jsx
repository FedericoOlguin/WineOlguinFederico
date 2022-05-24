import { createContext, useContext, useState } from "react";




const ContextApp = createContext([])

export const useContextApp = () => useContext(ContextApp)

const ContextAppProvider = ({ children }) => {
    // const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])


    function addToCart(prod) {
        // primero se validda si el producto esta en el carrito
        if (isInCart(prod.id)) {

            let producto = cart.find(element => element.id === prod.id)
            // Estando el producto en el carrito se comprueba que la cantidad a agregar este en stock y pasa a agregarse la cantidad 
            if (producto.cantidad < producto.stock && producto.cantidad + prod.cantidad < producto.stock) {
                setCart([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.cantidad + prod.cantidad } : element)])
            } else {
                let agregar = producto.stock - producto.cantidad
                agregar !== 0 && setCart([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.stock } : element)])
                agregar === 0 ?
                    (
                        alert("No hay mas stock")
                    ) :
                    (
                        alert("Solo se agregaron " + agregar + " productos al carrito debido a que no hay mas stock")

                    )
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