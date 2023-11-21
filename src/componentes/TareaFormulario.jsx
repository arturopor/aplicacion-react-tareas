import { useState } from 'react'
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        // console.log('Escribiendo...')
        // console.log(e.target.value)
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Enviando formulario...")
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        // console.log(tareaNueva)
        props.onSubmit(tareaNueva)
    }

    return (
        <form className='tarea-formulario' onSubmit={handleSubmit}>
            <input className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={handleChange}
                />
                <button className='tarea-boton'>Agregar tarea</button>
        </form>
    )
}

export default TareaFormulario