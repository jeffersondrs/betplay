import "./App.css";
import Form from "./components/Form/Form.component";
import ChoiceTimes from "./components/ApiRequest/ChoiceTime";
import { jogos } from "./api/services/timesApi";

function App() {
  return (
    <div className="App">
      <Form />
      <div className="flex flex-col">
        {jogos.map((jogo) => {
          return (
            <ChoiceTimes
              id={jogo.id}
              timecasa={jogo.timecasa}
              timevisitante={jogo.timevisitante}
              empate={jogo.empate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
