import { useState } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import Container from './components/Container'
import ButtonDelete from './components/ButtonDelete'
import ButtonEdith from './components/ButtonEdith'
import './App.css';



function App() {
  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }

  const update = usuario => {
    setUsuarios(
      usuario
    )
    console.log(usuarios);
  }




  return (
    <div >
    <Container>
      <Card>
        <div>
          <Form submit={submit} />
        </div>
      </Card>
      <Card>
        <h1>Usuarios</h1>
        <ul>
          {usuarios.length > 0? usuarios.map((x,index) =>
          <li key={index}>
            {`Nombre: ${x.name}
            ${x.lastname} || 
            CURP: ${x.curp} ||
            Direccion: ${x.address} || 
            Correo: ${x.email} ||
            Numero: ${x.number} || 
            Fecha de nacimiento: ${x.birthdate} 
            `} <br />
            <ButtonEdith update={update} index={index} users={usuarios}/>
            <ButtonDelete update={update} index={index} users={usuarios}/>
          </li>) : <p>No hay usuarios</p>}
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
