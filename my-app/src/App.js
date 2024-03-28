import './App.css';
// import { UploadButton } from "./ButtonTemp"
import { SelectedLanguage } from './components/SelectedLanguage';
import { Welcome } from './components/Welcome';
import { InfoButtons } from './components/Info-for-Lisa';
function App() {

  return (
    <>
          <Welcome/>
    <SelectedLanguage/>
      {/* <UploadButton /> */}
    <InfoButtons/>
    </>
  );
}

export default App;
