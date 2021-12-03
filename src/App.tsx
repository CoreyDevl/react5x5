import React, { useState, useEffect} from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {

  const [bg, setBg] = useState('red');
  const [list, setList] = useState(['La pasta', 'Il vino', 'La erba', 'La caca'])

  const [name, setName] = useState('Corey');
  const [age, setAge] = useState(2000);
 
  const handle20 = () => {
    setAge(37)
    setBg('#55995e')
  }
  const handle90= () => {
    setAge(2000);
    setBg('#02311a')
  }
  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      {age < 1999 &&
      <button onClick={handle90}>Tenho 1000 reais</button> 
      }
      {age > 1999 &&
      <button onClick={handle20}>Tenho 20 reais</button>
       }
  <hr />
  <ul>
    {list.map((frase, index)=>(
      <li key={index}>
        {frase}
      </li>
    ))}
  </ul>

      <Footer /> 


    </div>
  )
}

export default App