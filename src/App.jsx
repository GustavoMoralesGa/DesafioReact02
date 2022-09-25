import { useState } from 'react'
import Button from './components/Button';
import Input from './components/Input'


function App() {
  const [state, setState] = useState('');
 
  return (

    <div className="App">
        <h1>Desafio Estado de componentes.</h1>
        <Input state={state} setState={setState}  />
        {state === '252525' && <Button /> }    
    </div>
  )
}

export default App
