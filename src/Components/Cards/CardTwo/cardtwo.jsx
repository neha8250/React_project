import React from "react";
import { useState } from "react";



function Cardtwo (){
const[Empname, setEmpname] = useState("")


return (
    <>
      
             <div class="col-md-4">
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                    
                    <h2 className="card-title">CardTwo</h2>
                    <span className="card-description">
                    <button onClick={()=>setEmpname("Neha")}>Click me</button>
                    </span>
                   
                  </div>
                 
                  </div>
                </div>
              </div>
            </>
          
    
  );
};

export default Cardtwo; 