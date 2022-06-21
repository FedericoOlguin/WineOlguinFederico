import "./footer.css"
import Logo from "../../assets/imagenes/LogoWine.svg"




function Footer() {
    return (
        <div className="footer__container">
            <div>
                <img src={Logo} alt="" className="logo" />
                <h5>Wine Shop</h5>
            </div>
            <h6 >Copyrigth&copy; 2022 All rights reserved</h6>
        </div>
    )
}


export default Footer