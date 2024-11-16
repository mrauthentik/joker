export default function New(){
    const items = ["thing 1", "thing 2"]
      const itemsElement = items.map((list)=>{
        return <p>{list}</p>
      })
 
      function greeting(name){
        const date = new Date()
        const hours = date.getHours() 
        const minute = date.getMinutes()
        console.log(hours + ':' + minute)  
      }
      greeting("Bob ")


   function additem(){
     return itemsElement
   }
    return (
        <div>
            <h1> Welcome to my set items just testing</h1>
            <button onClick={additem}> Add new item</button>
            {itemsElement}
        </div>
    )
}