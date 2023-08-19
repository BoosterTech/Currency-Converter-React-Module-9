import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {!!result && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN =&nbsp;
        <strong>
          {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);
