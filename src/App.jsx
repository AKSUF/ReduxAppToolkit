import './App.css';
import CounterView from './features/counter/counterView';
import PostViewCounter from  './features/counter/postViewCounter'


function App() {
  return (
    <div className="App">
     <h1>Counter App</h1>
     <CounterView/>
<PostViewCounter></PostViewCounter>
    </div>
  );
}

export default App;
