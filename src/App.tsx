import { useState } from 'react';
import '../src/index.css'
import poweredImage from './assets/powered.png'
import {levels,calculateImc} from './helpers/imc'
import {Griditem} from "./components/Griditem"
const App = () => {
  const [ heightField , setHeightField ] = useState<number>(0);
  const [ weightField , setWeightField ] = useState<number>(0);

  const handleCalculateButton = () => {
    if(heightField && weightField){

    }else {
      alert('Digite todos os campos.');
    }
  }

  return (
    <div className='main'>
      <header>
        <div className='headerContainer'>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className='container'>
        <div className='leftSide'>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigle para Índice de Massa Corpóreo, parâmetro adotado pela Organização Mundical de Saúde para calcular o peso ideal de cada pessoa.</p>
        
          <input 
            type="number"
            placeholder='Digite sua altura. Ex: 1.5 (em métros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            />
          <input 
            type="number"
            placeholder='Digite seu peso. Ex: 75.3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            />
        
          <button onClick={handleCalculateButton} className=''>Calcular</button>
        </div>
        <div className='rightSide'>
          <div className='grid'>
            {levels.map((item,key)=>(
              <Griditem key={key} item={item}/>
            ))}
          </div>
        </div>      
      </div>
    </div>
  );
}

export default App
