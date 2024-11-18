import React from "react";
export default function State(){
let [important,setIsImportant] = React.useState(0)
const [isDarkMode, setIsDarkMode] = React.useState(false)
  
//   Setting up my darkmode and light mode

function toggleTheme(){
    setIsDarkMode((prevState)=> !prevState)
}

const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? '#fff' : "#333"
}

function increment(){
    setIsImportant(prevCount => prevCount + 1)
    console.log("increment button was clicked")
}
function decrement(){
    setIsImportant(function (prevCount){
        return prevCount - 1
    })
    
}
// let answer = isGoingOut != "i want to go out" ? "This true" : "This is false"
    const [isGoingOut, setGoingOut] = React.useState(true)
    function answer(){
        setGoingOut((prevState => !prevState))
    }

    return(
        <div style={themeStyles}>
            <h2>{isDarkMode ? "Dark Mode" : 'Light Mode'}</h2>
            <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}</button>
           <h1> {important} </h1>
           <button onClick={answer}> Going Out</button>
           <h1>{isGoingOut ? "Yes" : "No"}</h1>
          <button className="addition" onClick={increment}> + </button>
          <button className="substraction" onClick={decrement}>-</button>

        </div>
    )
}