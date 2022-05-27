
import { useContextApp } from "../../context/ContextApp"
import "./cartWidget.css"
import { Link as LinkRouter } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function CartWidget() {
    const { cantidad } = useContextApp()
    return (
        <>
            {cantidad() !== 0 ? (
                <li> <LinkRouter to="/cart"><ShoppingCartIcon /> {cantidad()}</LinkRouter></li>
            ) : (
                <li> <LinkRouter to="/cart"><ShoppingCartIcon /></LinkRouter></li>
            )}
        </>
    )
}

export default CartWidget