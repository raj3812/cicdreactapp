import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is blog website
      {/* <div>Work in progress</div> */}
      <div>Work is completed </div>
      <p>code is updated and we are live now</p>
      <p>Check new details</p>
      <Card
      ><p>Check new details2</p></Card>
      </header>
    </div>
  );
}

export default App;
