import "./App.css";
import Form from "./components/Form/Form.component";
import Match from "./components/Matchs/Matchs.components";
import flamengo from "../assets/escudo.png";
import vasco from "../assets/vasco.png";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col ">
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
        <Match
          timecasa="Flamengo"
          escudocasa={flamengo}
          timefora="Vasco"
          escudofora={vasco}
        />
      </div>
    </div>
  );
}

export default App;
