import "./App.css";
import Form from "./components/Form/Form.component";
import ChoiceTimes from "./components/ApiRequest/ChoiceTime";
import { jogos } from "./api/services/timesApi";
import Checkout from './components/Paypal/Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "ARnnF4S56wNt3sxoBzRMvUYfz3h_l1JCAF_w4sDCvIvpTueM8U3DbAJxGS0f4LMRSO_Xa0eEBTOOsxhY",
  currency: "USD",
  intent: "capture",
};

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
      <PayPalScriptProvider options={initialOptions}>
        <Checkout/>
    </PayPalScriptProvider>
    </div>
  );
}

export default App;
