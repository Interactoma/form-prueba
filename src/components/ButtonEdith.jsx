import Swal from 'sweetalert2'

const ButtonEdith = ({update, index, users})=>{

    //funciopn para editar un usuario
    const handleClick = () => {
        //obtenemos el usuario a editar
        let user = users[index]
        let newUser
        Swal.fire({
            title: 'Editar usuario',
            html: `
            <input type="text" id="name" class="swal2-input" placeholder="Nombre" value=${user.name}>
            <input type="text" id="lastname" class="swal2-input" placeholder="Apellido" value=${user.lastname}>
            <input type="email" id="email" class="swal2-input" placeholder="Correo" value=${user.email}>
            <input type="text" id="number" class="swal2-input" placeholder="Numero" value=${user.number}>
            <input type="text" id="curp" class="swal2-input" placeholder="CURP" value=${user.curp}>
            <input type="text" id="address" class="swal2-input" placeholder="Direccion" value=${user.address}>
            <input type="text" id="birthdate" class="swal2-input" placeholder="Fecha de nacimiento dd/mm/aaa" value=${user.birthdate}>
            `,
            confirmButtonText: 'Modificar',
            focusConfirm: false,
            preConfirm: () => {
              const name = Swal.getPopup().querySelector('#name').value
                const lastname = Swal.getPopup().querySelector('#lastname').value
                const email = Swal.getPopup().querySelector('#email').value
                const number = Swal.getPopup().querySelector('#number').value
                const curp = Swal.getPopup().querySelector('#curp').value
                const address = Swal.getPopup().querySelector('#address').value
                const birthdate = Swal.getPopup().querySelector('#birthdate').value
              if (!name || !lastname || !email || !number || !curp || !address || !birthdate) {
                Swal.showValidationMessage(`Please enter login and password`)
              }
              users[index] = newUser = { name: name, lastname: lastname, email: email, number: number, curp: curp, address: address , birthdate: birthdate}
              

                update(users)
            }
          }).then((result) => {
            Swal.fire(`
                Name: ${newUser.name}
                Lastname: ${newUser.lastname}
                Email: ${newUser.email}
                Number: ${newUser.number}
                Curp: ${newUser.curp}
                Address: ${newUser.address}
                Birthdate: ${newUser.birthdate}
            
            `.trim())
        })

    }


    return(
        <button onClick={handleClick}>Editar</button>
    )
}
export default ButtonEdith;