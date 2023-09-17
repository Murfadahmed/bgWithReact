import { useState } from 'react';
import './App.css';


function App() {
  const [color, setColor] = useState('cyan')
  // setColor("")
  return (
    <div style={{ backgroundColor: color }} className="backDiv">
      <div className='btnDiv'>
        {Array.from(["red", "blue", "green", "yellow", "orange", "indigo", "olive","violet","purple","lightgrey","salmon","brown"], C => (
          <button style={{ backgroundColor: C, }} onClick={() => {setColor(C)}} className={C}>{C}</button>

        ))}
      </div>
    </div>
  );
}

export default App;
