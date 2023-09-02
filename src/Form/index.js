import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";
import { Result } from "../Result";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].abbreviation);
  const [amount, setAmount] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(
      ({ abbreviation }) => abbreviation === currency
    ).rate;

    setResult({
      sourceAmount: +amount,
      finalAmount: amount / rate,
      currency,
    });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">CURRENCY CONVERTER</h1>
      <div className="container">
        <p>
          <label>
            Amount:{" "}
            <input
              type="number"
              min=".01"
              className="container__amountElement"
              step="0.01"
              placeholder="enter amount in PLN*"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Currency:
            <select
              name="Currency"
              className="container__currencyElement"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.abbreviation}
                  value={currency.abbreviation}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
      </div>

      <div>
        <Result result={result} />
      </div>

      <div className="calculateButton">
        <button type="submit" className="form__submitButton">
          CALCULATE
        </button>
      </div>

      <p className="form__info">
        Currency rates taken from <strong>Google Finance</strong> website on
        19.08.2023
      </p>
    </form>
  );
};

export default Form;
