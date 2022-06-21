import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom"
import "./navBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/imagenes/LogoWine.svg"
import ListIcon from '@mui/icons-material/List';
function NavBar() {
    const [expanded, setExpanded] = useState(false)
    return (
        <nav className="nav">
            <div className="nav__containerLogo">
                <LinkRouter to="/">
                    <img src={Logo} alt="LOGO" className="logo" />
                    <h1>Wine Shop</h1>
                </LinkRouter>
            </div>
            <ListIcon onClick={() => setExpanded(!expanded)} className="hamburger_menu" />
            <div className={
                expanded ? "nav__containerLinks expanded" : "nav__containerLinks"
            }>
                <ul className="nav__ul">
                    <li> <LinkRouter to="/">Home</LinkRouter></li>
                    <li> <LinkRouter to="/category/Tinto">Red Wines</LinkRouter></li>
                    <li> <LinkRouter to="/category/Blanco">White Wines</LinkRouter></li>
                    <CartWidget />
                </ul>
            </div>
        </nav>

    )
}


export default NavBar