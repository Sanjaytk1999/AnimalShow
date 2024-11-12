import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css"
function getRandomAnimal(){
    const animal=["cow",'horse','cat','bird','dog','gater']
    return animal[Math.floor(Math.random()*animal.length)]
}

function App(){
    

 const[animal,setAni]=useState([])
 const handleButton=() =>{
   setAni([...animal,getRandomAnimal()])
 }
 
 const renderAnimal= animal.map((animal,index)=>{
 return <AnimalShow type={animal} key={index}/>
 })
    return <div className="app">
        <button onClick= {handleButton}>Add Animal</button>
        
        <div className="animal-list">{renderAnimal}</div>
    </div>


 }

export default App;