import './App.css';

import Questions from "./components/Questions";
import { UploadButton } from "./ButtonTemp"
import { SelectedLanguage } from './components/SelectedLanguage';
function App() {

  return (
    <>
    <Questions/>
    <SelectedLanguage/>
    <UploadButton />
    </>
  );
}

export default App;
