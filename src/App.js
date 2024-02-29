import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>hallo</h1>
      <button onClick={() => alert('Button wurde geklickt!')}>Klick mich</button>
    </div>
  );
}

export default App;
