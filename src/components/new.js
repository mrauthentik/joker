export default function New(){
    const items = ["thing 1", "thing 2"]
    function set(){
        items.map((list)=>{
            return(
             list
            )
          console.log(list)
        })
    }
    return (
        <div>
            <h1> Welcome to my set items just testing</h1>
            <button onClick={set}> Add new item</button>
            <p>{set}</p>
        </div>
    )
}