import React from 'react';
import './App.css';
import Joker from './components/Joker';
import jokesData from './components/jokesData';
import NavBar from './components/NavBar';
import traveldata from './components/traveldata';
import Main from './components/main';
import Meme from './MemeHeader';
import MemeMain from './components/meme';
import New from './components/new';
import State from './components/useState';
import Avatar from './components/avatar';
import Count from './components/count';
import boxes from './boxes';
import Form from './components/form';
function App() {
  const jokeElements = jokesData.map((jokes)=>{
    return ( <Joker setup={jokes.setup}
                  punchline={jokes.punchline}
            />)
  })
  const travellists = traveldata.map((list)=>{
    return(
      <Main 
        key={list.id}
        {...list}
      />
    )
  })
  // Count component Usestate
  const [count, setCount] = React.useState(0)
     function add(){
      setCount((preCount)=> preCount + 1)
     }
     function substract(){
      setCount((preCount)=> preCount - 1)
     }
  //Box state starts here
  const [square, setSquare] = React.useState(boxes)
  const  squareElement = square.map((items)=>{
    return(
      <div className='box' key={items.id}> </div> 
    )

    
  })

  return(
    <div>
      <NavBar />
      {travellists}
      {jokeElements}
      <Meme />
      <MemeMain />
      <thing />
      <New />
     <State />
     <Avatar />
       <div className='Count'> 
          <button onClick={substract}> - </button>
     <Count number={count} />
        <button onClick={add}> + </button>
       </div>
       {squareElement}
       <Form />
    </div>
  )
}
export default App;
