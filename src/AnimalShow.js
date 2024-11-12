import { useState } from "react"
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"
import horse from "./svg/horse.svg"


const images={
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}){
    const [counts, setCount]=useState(0)

const clickHandler=()=>{
setCount(counts + 1)
}

    return <div className="animal-show" onClick={clickHandler}>
        <img className="animal" alt="animals" src={images[type]}/>
        <img className="heart"
        alt="heart" 
        src={heart}
        style={({width:10 + 10 * counts })}/>
    </div>
}
export default AnimalShow;