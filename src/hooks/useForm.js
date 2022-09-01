import { useState } from 'react'

const useForm = (inicial) => {
  const [formulario, setForm] = useState(inicial)
  const [error, setError] = useState({})

  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const lastnameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  const numberRegex = /^\d{10}$/
  const curpRegex = /^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$/
  const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/

  const validate = (formulario) => {
    let errors = {}
    if (!nameRegex.test(formulario.name)) {
      errors.name = 'Nombre invalido'
    }
    if (!emailRegex.test(formulario.email)) {
      errors.email = 'Email invalido'
    }
    if (!lastnameRegex.test(formulario.lastname)) {
      errors.lastname = 'Apellido invalido'
    }
    if (!numberRegex.test(formulario.number)) {
      errors.number = 'Numero invalido'
    }
    if (!curpRegex.test(formulario.curp)) {
      errors.curp = 'Curp invalida'
    }
    if (!birthdateRegex.test(formulario.birthdate)) {
      errors.birthdate = 'Fecha de nacimiento invalida'
    }
    return errors
  }

  const handleChange = (e) => {
    
    setForm({
      ...formulario,
      [e.target.name]: e.target.value
    })
    setError(validate({
      ...formulario,
      [e.target.name]: e.target.value
    })) 
  }

  const reset = () => {
    setForm(inicial)
  }

  return [formulario, handleChange, reset, error]
}

export default useForm