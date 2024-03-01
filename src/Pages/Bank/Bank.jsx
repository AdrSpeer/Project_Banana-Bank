import { useState } from "react";
import "./Bank.css";

const Bank = () => {
  const [input, setInput] = useState("");
  const [credit, setCredit] = useState(0);

  const addCredit = () => {
    setInput("");
    setCredit(parseFloat(credit) + parseFloat(input));
  };
  const minusCredit = () => {
    if (credit < input) {
      setInput("");
      return alert("Leider kannst du nicht ins Minus gehen");
    } else {
      setInput("");
      setCredit(parseFloat(credit) - parseFloat(input));
    }
  };

  return (
    <section className="banana">
      <h1>Banana Bank</h1>
      <div className="box-wrapper">
        <h3>Mein Girokonto</h3>
        <h2>{credit.toFixed(2)} €</h2>
        {console.log(credit)}
        <input
          onInput={(event) => setInput(parseFloat(event.target.value))}
          value={input}
          type="number"
          placeholder="Betrag in €"
          id="input"
        />
        <div>
          <button onClick={addCredit}>Einzahlen</button>

          <button onClick={minusCredit}>Auszahlen</button>
        </div>
      </div>
    </section>
  );
};

export default Bank;
