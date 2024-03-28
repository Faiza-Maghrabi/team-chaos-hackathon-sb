import './App.css';
import { UploadButton } from "./ButtonTemp"
import { SelectedLanguage } from './components/SelectedLanguage';
import { InfoButtons } from './components/Info-for-Lisa';

function App() {

  return (
    <>
    <SelectedLanguage/>
    <InfoButtons/>
    <UploadButton />
    </>
  );
}

export default App;
