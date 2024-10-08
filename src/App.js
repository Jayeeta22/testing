import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState("")
  return (
    <div className="App">
     <div>hello Jayeeta111 verified</div>
     <input placeholder='type here' name='username' id='userId' value={data} onChange={(e)=>setData(e.target.value)} />
    </div>
  );
}

export default App;
