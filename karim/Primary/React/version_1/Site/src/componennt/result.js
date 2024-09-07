import React from "react";
import { Contact } from "./contact.js"
import { Map } from "./map.js"

export function Result() {
    var latitude = 40.712776; 
    var longitude = -74.005974;
    return (

        <div class="result">

            <Contact />
       
            <Map/>
        </div>
    );
}

export default Result;
