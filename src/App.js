import { useState } from "react";
import "./App.css";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(
      ({ abbreviation }) => abbreviation === currency
    ).rate;

    setResult({
      sourceAmount : +amount,
      finalAmount : amount/rate,
      currency,
    });
  };

  return (
    <div className="App">
      <Form 
      result={result}
      calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
