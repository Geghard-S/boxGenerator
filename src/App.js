import './App.css';
import { useState } from 'react';
import Boxes from './components/Boxes'
import New from './components/New'

function App() {

  const [boxes, setBoxes] = useState([
    {color: "blue"},
    {color: "red"},
    {color: "green"},
    {color: "yellow"}
  ])

  const createBox = (box) => {
    setBoxes([...boxes, box])
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <New createBox={createBox}/>
      <Boxes boxes={boxes} />
    </div>
  );
}

export default App;
