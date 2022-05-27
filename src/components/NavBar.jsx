import React from "react";
import { Link as LinkRouter } from "react-router-dom"
import "./navBar.css"
import CartWidget from "./CartWidget/CartWidget";
import Logo from "../assets/imagenes/LogoWine.svg"
function NavBar() {


    return (
        <nav className="nav">
            <div className="nav__containerLogo">
                <LinkRouter to="/">
                    <img src={Logo} alt="LOGO" className="logo" />
                </LinkRouter>
                <h1>Wine Shop</h1>
            </div>
            <div className="nav__containerLinks">
                <ul className="nav__ul">
                    <li> <LinkRouter to="/">Home</LinkRouter></li>
                    {/* <li> <a href="#">Sobre Nosotros</a></li> */}
                    {/* <li> <LinkRouter to="/tienda">Tienda</LinkRouter></li> */}
                    <li> <LinkRouter to="/category/pantalon">Pantalon</LinkRouter></li>
                    <li> <LinkRouter to="/category/campera">Campera</LinkRouter></li>
                </ul>
            </div>
            <div className="nav__containerLinks">
                <ul className="nav__ul">
                    <CartWidget />
                </ul>

            </div>

        </nav>

    )
}


export default NavBar