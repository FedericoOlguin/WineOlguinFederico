import React from "react";
import "./navBar.css"
import CartWidget from "./CartWidget/CartWidget";



function NavBar() {


    return (
        <nav className="nav">
            <div className="nav__containerLogo">
                <CartWidget />
                <h1>Wine Shop</h1>
            </div>
            <div>
                <ul className="nav__ul">
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">Sobre Nosotros</a></li>
                    <li> <a href="#">Tienda</a></li>
                    <li> <a href="#">Carrito</a></li>
                </ul>
            </div>

        </nav>

    )
}


export default NavBar