export default function New(){
    const items = ["thing 1", "thing 2"]
      const itemsElement = items.map((list)=>{
        return <p>{list}</p>
      })

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