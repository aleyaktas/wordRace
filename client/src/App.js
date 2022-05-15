import { useState } from 'react';
import './App.css';
import Checkbox from './components/UI/atoms/Checkbox/Checkbox';

function App() {
  const [selectedValue, setSelectedValue] = useState("")
  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedValue(value)
    console.log(`${value} is ${checked}`);
  }


  return (
    <div>
      <Checkbox value="aleyna" onChange={handleChange} />
      <Checkbox value="kaan" onChange={handleChange} />
    </div>
  );
}

export default App;