import "./App.css";
import Form from "./components/Form/Form.component";
import Match from "./components/Matchs/Matchs.components";
import { times, timesfora } from "../public/services/timesApi.js";
function App() {
  const nomes = times.map((time) => time.nome);
  const escudos = times.map((time) => time.escudo);
  const nomesfora = timesfora.map((time) => time.nome);
  const escudosfora = timesfora.map((time) => time.escudo);
  return (
    <div className="App">
      <div className="flex flex-col">
        <Match timecasa={nomes} escudocasa={escudos} timefora={nomesfora} escudofora={escudosfora} />
      </div>
      <div>
        <Form />
      </div>
      <div className="flex flex-col "></div>
    </div>
  );
}

export default App;
