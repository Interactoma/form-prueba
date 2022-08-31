import User from './User'

const Users = ({usuarios}) =>{
    return(
        <div>
            {usuarios.map((props) => {
                return(<User key={props.email} user={props}/>)
                
                
            })}
        </div>
    )
}

export default Users