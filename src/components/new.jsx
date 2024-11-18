import React from "react"
export default function New(){
  
   const [thingsArray, setThingsArray] = React.useState(['Thing1', 'Thing2'])
   const itemsElement = thingsArray.map((items)=>{
      return(
        <p>{items}</p>
      )
   })
   function additem(){
      setThingsArray((prevState)=>{
        return(
          [...prevState, `Thing ${prevState.length + 1}`]
        )
      })
    }
    function removeItem(){
      setThingsArray((prevState)=>{
        if(prevState.length > 0){
       return   prevState.slice(0, -1)
        }else{
        return  prevState
        }
      })
    }
 
      function greeting(name){
        const date = new Date()
        const hours = date.getHours() 
        const minute = date.getMinutes()
        console.log(hours + ':' + minute)  
      }
      greeting("Bob ")


 
    
    return (
        <div>
            <h1> Welcome to my set items just testing</h1>
            <button onClick={additem}> Add new item</button>
            <button onClick={removeItem}>Remove item</button>
            {itemsElement}
        </div>
    )
}