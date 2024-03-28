import './App.css';
// import { UploadButton } from "./ButtonTemp"
import { SelectedLanguage } from './components/SelectedLanguage';
import { Welcome } from './components/Welcome';
function App() {

  return (
    <>
          <Welcome/>
    <SelectedLanguage/>
      {/* <UploadButton /> */}
    </>
  );
}

export default App;
