import {useState} from 'react'
import Input from './Input'
import useForm from '../hooks/useForm'
import Button from './Button'
import './Form.css'




const Form = ({submit}) =>{
    const [formulario, handleChange, reset, error] = useForm({
        name: '',
        email: '',
        lastname: '',
        number: '',
        curp: '',
        address: '',
        birthdate: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.keys(error).length === 0){
            submit(formulario)
            reset()
        }
        
    }

    
    

    return(
        <form onSubmit={handleSubmit}>
            <Input label="Nombre" name="name" value={formulario.name} onChange={handleChange} placeholder='Nombre' />
            {error.name && <p className='error'>{error.name}</p>}
            <Input label="Apellido" name="lastname" value={formulario.lastname} onChange={handleChange} placeholder='Apellido' />
            {error.lastname && <p className='error'>{error.lastname}</p>}
            <Input label="Correo" name="email" value={formulario.email} onChange={handleChange} placeholder='Correo' />
            {error.email && <p className='error'>{error.email}</p>}
            <Input label="Numero" name="number" value={formulario.number} onChange={handleChange} placeholder='Numero' />
            {error.number && <p className='error'>{error.number}</p>}
            <Input label="CURP" name="curp" value={formulario.curp} onChange={handleChange} placeholder='CURP' />
            {error.curp && <p className='error'>{error.curp}</p>}
            <Input label="Direccion" name="address" value={formulario.address} onChange={handleChange} placeholder='Direccion' />
            {error.address && <p className='error'>{error.address}</p>}
            <Input label="Fecha de nacimiento" name="birthdate" value={formulario.birthdate} onChange={handleChange} placeholder='Fecha de nacimiento dd/mm/aaa' />
            {error.birthdate && <p className='error'>{error.birthdate}</p>}
            <Button>Enviar</Button>
      </form>
    )
}

export default Form