import "./App.css";
import Form from "./components/Form/Form.component";
import ChoiceTimes from "./components/ApiRequest/ChoiceTime";
import { jogos } from "./api/services/timesApi";

function App() {
  return (
    <div className="App">
      <Form />
      <div>
        {jogos.map((jogo: any) => (
          <ChoiceTimes key={jogo.id}
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
