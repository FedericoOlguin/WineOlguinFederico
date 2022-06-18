import { useRef } from "react"






function FormCart({ setBuyer }) {
    const form = useRef()

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

    return (
        <form ref={form} onSubmit={(e) => dataBuyer(e)}>
            <label className="labelForm" htmlFor="name">
                <span className='span-signup'>Name</span>
                <input className="inputFrom" type="text" id="name" name="name" required />
            </label>
            <label className="labelForm" htmlFor="email">
                <span className='span-signup'>Email</span>
                <input className="inputFrom" type="email" id="email" name="email" required />
            </label>
            <label className="labelForm" htmlFor="phone">
                <span className='span-signup'>Phone</span>
                <input className="inputFrom" type="tel" id="phone" name="phone" required />
            </label>
            <button className="btn" type="submit">Confirmar datos</button>
        </form>
    )
}



export default FormCart