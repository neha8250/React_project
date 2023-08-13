import React from "react";
import Cardone from "./CardOne/Cardone";
import Cardtwo from "./CardTwo/cardtwo";
import Cardthree from "./CardThree/cardthree";


const Cards = () =>{
    return(
        <div class="container">
            <Cardone/><Cardtwo/><Cardthree/>
        </div>
    )
}


export default Cards