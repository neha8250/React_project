import React from "react";
import { useState } from "react";



const Cardone = ()=>{
const[Empname, setEmpname] = useState("")
const[Empemail, setEmpemail] = useState("")
const[Empaddress, setEmpaddress] = useState("")



return (
    
    <>
     
          <div class="col-md-4">
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                    
                    <h2 className="card-title">CardOne </h2>
                    <span className="Name">Name: {Empname}</span>
                    <span className="Name">Email: {Empemail}</span>
                    <span className="Name">Address: {Empaddress}</span>
                    <br></br>
                    <button onClick={()=>setEmpname("Neha")}>Click me</button>
                    
                   
                  </div>
                  </div>
                  
                </div>
              </div>
            </>
          
    
  );
};

export default Cardone; 