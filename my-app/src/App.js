import logo from './logo.svg';
import './App.css';
import { UploadButton } from "./ButtonTemp"


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hii
        </p>
        <UploadButton />
      </header>
    </div>
  );
}

export default App;
