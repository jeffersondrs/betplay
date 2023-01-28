import "./App.css";
import Form from "./components/Form/Form.component";
import ChoiceTimes from "./components/ApiRequest/ChoiceTime";
import { jogos } from "../public/services/timesApi.js";

function App() {
  return (
    <div className="App">
      <Form />
      <div>
        {jogos.map((jogo: any) => (
          <ChoiceTimes
            timecasa={jogo.timecasa}
            timevisitante={jogo.timevisitante}
            empate={"Empate"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
