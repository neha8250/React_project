
import { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Cards from './Components/Cards/cards';


function App() {
  const[name, setName] = useState("")
  return (
    
    <div className="App">
      <Navbar/><Cards/>
          {/* <h1>Name : {name}</h1>
          <button onClick={()=>setName("Neha")}>
            UserName change
          </button> */}
        
    </div>
  );
}

export default App;
