// import { currencies } from "../currencies"
import "./style.css";

const Form = () => (
  <form className="form">
    <h1 className="form__header">CURRENCY CONVERTER</h1>
    <div className="container">
      <p>
        <label>
          Amount:{" "}
          <input
            type="number"
            min=".01"
            name="amount"
            className="container__amountElement"
            step="0.01"
            placeholder="enter amount in PLN*"
            required
            autofocus
          />
        </label>
      </p>
      <p>
        <label>
          Currency:
          <select name="Currency" class="container__currencyElement">
            <option value="EUR" selected>
              EUR - European euro
            </option>
            <option value="USD">USD - American dollar</option>
            <option value="GBP">GBP - British pound</option>
          </select>
        </label>
      </p>
    </div>

    <div class="form__result"> </div>

    <div class="calculateButtonContainer">
      <button type="submit" class="form__submitButton">
        CALCULATE!
      </button>
    </div>

    <p class="form__info">
      Currency rates taken from <strong>Google Finance</strong> website on
      19.08.2023
    </p>
  </form>
);

export default Form;
