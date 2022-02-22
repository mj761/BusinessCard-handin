import React from "react"
import picture from "../profilepic.jpg"

export default function Info(){
    return(
        <div className="Infobox">
            <img src={picture} alt="a picture of me" className="picture"></img>
            <h1>Mie Grønkjær Bechmann Jørgensen</h1>
            <h2>Web Developer and Designer</h2>
            <button class="button"><a href="https://www.linkedin.com/in/mie-j%C3%B8rgensen-37874b158/"></a>Linkedin</button>
            <button class="button"><a href="supermiavsen@hotmail.com"></a>Email</button>
        </div>
    ); 
}