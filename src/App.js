// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor ===  'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <button 
        disabled={disabled} 
        onClick={() => setButtonColor(newButtonColor)} 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}>
          Change to {newButtonColor}
        </button>
      <input 
        onChange={(e) => setDisabled(e.target.checked)} 
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled} 
        id="disable-button-checkbox" />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;