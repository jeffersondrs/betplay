import "./App.css";
import Form from "./components/Form/Form.component";
import ChoiceTimes from "./components/ApiRequest/ChoiceTime";
import { jogos } from "./api/services/timesApi";

function App() {
  return (
    <div className="App">
      <Form />
      <div>
        Is Comming Soon!
      </div>
    </div>
  );
}

export default App;
