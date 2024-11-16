import React from "react";
export default function State(){
let [important,setIsImportant] = React.useState(0)

    
function increment(){
    setIsImportant(important + 1)
    console.log("increment button was clicked")
}
function decrement(){
    setIsImportant(important - 1)
    console.log("decrement button was clicked")
}

    return(
        <div>
           <h1> {important} </h1>
          <button className="addition" onClick={increment}> + </button>
          <button className="substraction" onClick={decrement}>-</button>

        </div>
    )
}