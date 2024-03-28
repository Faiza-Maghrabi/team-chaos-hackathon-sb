import logo from './logo.svg';
import './App.css';
import {sendData} from "./server/Database"

const testData = {
      Name: "Lisa",
      Age: "35",
      Number_of_Children: "4",
      Visa_Status: "Refugee",
      Occupation: "Bank",
      Accomodation: "No",
      Language_Level: "Intermediate",
      Heath_Issues: "None",
      first_lang: "Ukrainian",
      has_child: "Yes",
      job_uk: "No"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hii
        </p>
        <button OnClick={sendData(testData.Name, testData.Age, testData.Number_of_Children, testData.Visa_Status, testData.Occupation, testData.Accomodation, testData.Language_Level, testData.Heath_Issues, testData.first_lang, testData.has_child, testData.job_uk)}>SendData</button>
      </header>
    </div>
  );
}

export default App;
