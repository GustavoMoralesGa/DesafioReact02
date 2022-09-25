
const Input = ({state, setState}) => {
    
    return (
        <div>
            <div>
                <input  placeholder="Usuario" 
                        type="text" 
                        className='form-control mb-2'
                    />
            </div>
            <div>
                <input  placeholder="Contraseña"
                        className='form-control'
                        type="password" 
                        onChange={(eve) => setState(eve.target.value)}
                        value={state}
                />
            </div>  
        </div>
    )
}

export default Input;