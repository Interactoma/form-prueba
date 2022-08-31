import './Input.css'
const Input = ({label, ...children})=>{
    return (
        <div className='input'>
            <label>{label}</label>
            <input {...children}></input>
        </div>
    )
}

export default Input