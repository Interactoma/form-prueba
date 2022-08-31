
const User = ({user}) => {
    return(
        <div>
            <p>{user.name} {user.lastname} {user.email} {user.tNumber} {user.CURP} {user.address}</p>
        </div>
    )
}

export default User