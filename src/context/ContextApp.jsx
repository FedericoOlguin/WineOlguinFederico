import { createContext, useContext, useState } from "react";




const ContextApp = createContext([])

export const useContextApp = () => useContext(ContextApp)

const ContextAppProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartW")) || [])

    function cantidad() {
        let cantidad = cart?.map(item => item.cantidad).reduce((acc, valActual) => acc + valActual, 0)
        return cantidad
    }

    function totalCompra() {
        let total = cart?.map(item => item.cantidad * item.price).reduce((acc, valActual) => acc + valActual, 0)
        return total
    }

    function addToCart(prod) {
        // first it is validated if the product is in the cart
        if (isInCart(prod.id)) {
            let producto = cart.find(element => element.id === prod.id)
            // When the product is in the cart, it is verified that the quantity to be added is in stock and the quantity is added.
            if (producto.cantidad < producto.stock && producto.cantidad + prod.cantidad < producto.stock) {
                setCart([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.cantidad + prod.cantidad } : element)])
                localStorage.setItem("cartW", JSON.stringify([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.cantidad + prod.cantidad } : element)]))
            } else {
                let agregar = producto.stock - producto.cantidad
                agregar !== 0 && setCart([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.stock } : element)])
                localStorage.setItem("cartW", JSON.stringify([...cart.map(element => element.id === producto.id ? { ...element, cantidad: element.stock } : element)]))
                agregar === 0 ? (alert("No hay mas stock")) : (alert("Solo se agregaron " + agregar + " productos al carrito debido a que no hay mas stock"))
            }
        } else {
            setCart([...cart, prod])
            localStorage.setItem("cartW", JSON.stringify([...cart, prod]))
        }
    }

    function deletToCart(id) {
        setCart(cart.filter(prod => prod.id !== id))
        localStorage.setItem("cartW", JSON.stringify(cart.filter(prod => prod.id !== id)))
    }

    function isInCart(id) {
        return (cart?.find(element => element.id === id)) ? true : false
    }

    function emptyCart() {
        setCart([])
        localStorage.removeItem("cartW")
    }

    return (
        <ContextApp.Provider value={{
            cart,
            addToCart,
            deletToCart,
            isInCart,
            emptyCart,
            cantidad,
            totalCompra
        }}>
            {children}
        </ContextApp.Provider >
    )
}

export default ContextAppProvider
