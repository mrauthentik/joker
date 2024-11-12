import logo from './logo.svg';
import './App.css';
import Joker from './components/Joker';

function App() {
  return(
    <div>
      <Joker 
      setup="How did the hacker escape the police?"
      punchline="He just ransomware!"
      />
      <Joker 
      setup="Why does bird Fly"
      punchline="because they have wings"
      />
      <Joker 
      setup="What's the best thing about Switzerland?"
      punchline="I don't know, but the flag is a big plus!"
      />
      <Joker 
      setup="Why does bird Fly"
      punchline="because the have wings"
      />
      <Joker 
      setup="How does a Penguin builds a house"
      punchline="He glues it!"
      />
      <Joker 
      // setup="How does a Penguin builds a house"
      punchline="He glues it!"
      />
    </div>
  )
}
export default App;
