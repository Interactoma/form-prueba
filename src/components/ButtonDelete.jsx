const ButtonDelete = ({update, index, users})=> {
    const handleClick = () => {
        let nuevosUsuarios = users.filter((user, i) => i !== index)
        update(nuevosUsuarios)
    }

    return(
        <button onClick={handleClick}>Eliminar</button>
    )
}

export default ButtonDelete;