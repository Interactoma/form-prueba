import {useState} from 'react'
import Input from './Input'
import Users from './Users'
import './Form.css'

const regex = (cadena, tipo) =>{
    switch (tipo) {
        case "name":
            const name = new RegExp(
                /^(?:[A-Za-z]+|\d+)$/
             )
             if(name.test(cadena)){
                 return true
             }
            break;
        case "lastname":
            const lastname = new RegExp(
                /^(?:[A-Za-z]+|\d+)$/
             )
             if(lastname.test(cadena)){
                 return true
             }
             
            break;
        case "email":
            const email = new RegExp(
                '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
             )
             if(email.test(cadena)){
                 return true
             }
             
            break;
/*         case "curp":
            const curp = new RegExp(
                /^[A-Z\d]{18}$/
             )
             if(curp.test(cadena)){
                 return true
             }
             
            break; */
        case "tNumber":
            const number = new RegExp(
                /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
             )
             if(number.test(cadena)){
                 return true
             }
             
            break;
/*         case "address":
            const address = new RegExp(
                '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
             )
             if(address.test(cadena)){
                 return true
             }
             
            break; */
    
        default:
            return true
            break;
    }

}

const Form = () =>{
    const [usuarios, setUsuarios] = useState([])
    const [error, setError] = useState(false)
    let usuarioInicial = {
        name:null,
        lastname:"",
        email:"",
        CURP:"",
        tNumber:"",
        address:"",
    }

    const [usuario, setUsuario]= useState(usuarioInicial)

    const handleChange = (e) =>{
        e.preventDefault()
        if(regex(e.target.value, e.target.name)){
            console.log("correcto");
            setUsuario({
                ...usuario,
                [e.target.name]:e.target.value 
            })
            setError(true)
        } else {
            setError(false)
        }
    }

    const handleSubmit = () => {
        setUsuarios(e => [...e, usuario])
    }

    return(
        <div className='form'>
            <div onChange={handleChange}>
                <Input label="Nombre"  name="name" type="input"  />
                <Input label="Apellido"  name="lastname" type="input" />
                <Input label="Correo"  name="email" type="input" />
                <Input label="CURP" name="CURP" type="input" />
                <Input label="Telefono"  name="tNumber" type="input" />
                <Input label="Direccion"  name="address" type="input" />
                {error?<button type='submit' onClick={handleSubmit}>ENVIAR</button>:<p className='danger'>Completa el formulario correctamente</p>}
            </div>
            <Users usuarios={usuarios}/>
        </div>

    )
}

export default Form