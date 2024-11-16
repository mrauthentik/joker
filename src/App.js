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
    </div>
  )
}
export default App;
