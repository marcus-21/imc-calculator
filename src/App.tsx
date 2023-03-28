import '../src/input.css'
import poweredImage from './assets/powered.png'
const App = () => {
  return (
    <div className='main'>
      <header>
        <div className='headerContainer'>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className='container'>
        <div className='leftSide'>
          ...
        </div>
        <div className='rightSide'>
          ...
        </div>      
      </div>
    </div>
  );
}

export default App
