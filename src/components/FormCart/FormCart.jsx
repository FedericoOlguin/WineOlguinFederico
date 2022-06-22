import { useRef, useState } from "react"
import "./formCart.css"


function FormCart({ setBuyer }) {
    const form = useRef()
    const [emailIsTrue, setEmailIsTrue] = useState("idem")
    const [email, setEmail] = useState()

    function dataBuyer(event) {
        event.preventDefault()
        form.current.focus()
        let datosForm = new FormData(form.current)

        let datosBuyer = {
            name: datosForm.get("name"),
            email: datosForm.get("email"),
            phone: datosForm.get("phone")
        }
        setBuyer(datosBuyer)
    }

    function compararEmail(event) {
        if (event.target.value === email) {
            setEmailIsTrue("idem")
        } else {
            setEmailIsTrue("no coincide")
        }
    }

    return (
        <form className="form__container" ref={form} onSubmit={(e) => dataBuyer(e)}>
            <legend>

                <h3>Customer's information</h3>
            </legend>
            <label className="label__form" htmlFor="name">
                <span className='span'>Name</span>
                <input className="input__form" type="text" id="name" name="name" required />
            </label>
            <label className="label__form" htmlFor="email">
                <span className='span'>Email</span>
                <input onChange={(e) => setEmail(e.target.value)} className="input__form" type="email" id="email" name="email" required />
            </label>
            <label className="label__form" htmlFor="repeatEmail">
                <span className='span'>Repeat email</span>
                <input onKeyUp={(e) => compararEmail(e)} className={emailIsTrue === "idem" ? "input__form" : "input_error"} type="email" id="repeatEmail" name="repeatEmail" required />
                {emailIsTrue === "idem" ? <></> : <p className="no_coincide">The emails do not match</p>}

            </label>
            <label className="label__form" htmlFor="phone">
                <span className='span'>Phone</span>
                <input className="input__form" type="tel" id="phone" name="phone" required />
            </label>
            {emailIsTrue ? (
                <button className="btn" type="submit">Send data</button>
            ) : (
                <button disabled className="btn" type="submit">Send data</button>
            )}

        </form>
    )
}



export default FormCart