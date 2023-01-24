import "./App.css";
import Form from "./components/Form/Form.component";
import Request from "./components/ApiRequest/Api.component";

function App() {
  return (
    <div className="App">
      <Form />
      <div>
        <Request />
      </div>
    </div>
  );
}

export default App;
