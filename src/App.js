import logo from './logo.svg';
import './App.css';
import Joker from './components/Joker';
import jokesData from './components/jokesData';

function App() {
  const jokeElements = jokesData.map((jokes)=>{
    return ( <Joker setup={jokes.setup}
                  punchline={jokes.punchline}
            />)
  })
  return(
    <div>
      {jokeElements}
    </div>
  )
}
export default App;
