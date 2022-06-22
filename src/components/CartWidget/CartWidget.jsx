import { useContextApp } from "../../context/ContextApp"
import "./cartWidget.css"
import { Link as LinkRouter } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    const { cantidad } = useContextApp()
    return (
        <li> <LinkRouter to="/cart"><ShoppingCartIcon /> {cantidad() ? cantidad() : <></>}</LinkRouter></li>
    )
}

export default CartWidget