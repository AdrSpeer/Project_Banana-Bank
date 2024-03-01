import { useState } from "react";
import "./Konto.css";

const Konto = () => {
  // Input und Kontostand
  const [input, setInput] = useState("");
  const [credit, setCredit] = useState(0);
  const [darkLight, setDarkLight] = useState(false);

  //   Dark/Light
  const onChange = () => {};

  //   Abfrage für Zubuchung oder Abbuchung
  const addCredit = () => {
    if (input.length < 1) {
      setInput("");
      //   Errorhandling
      return alert("Bitte geben Sie den gewünschten Einzahlungspetrag ein");
    } else {
      setInput("");
      //   Kontostand addiert
      setCredit(parseFloat(credit) + parseFloat(input));
    }
  };
  const minusCredit = () => {
    if (credit < input) {
      setInput("");
      //   Errorhandling
      return alert(
        `Leider ist Ihr Konto mit dieser Auszahlung nicht mehr gedeckt, aktuell können maximal ${credit.toFixed(
          2
        )}€ ausgezahlt werden `
      );
    } else if (input.length < 1) {
      setInput("");
      //   Errorhandling
      return alert("Bitte geben Sie den gewünschten Auszahlungspetrag ein");
    } else {
      setInput("");
      //   Kontostand subtrahiert
      setCredit(parseFloat(credit) - parseFloat(input));
    }
  };

  return (
    <section className={darkLight ? "banana-dark" : "banana"}>
      <img
        onClick={() => setDarkLight((darkLight) => !darkLight)}
        src="../../../public/img/darklight.png"
        alt="Day/Night Icon"
      />
      <h1>Banana Bank</h1>
      <div className={darkLight ? "box-wrapper-dark" : "box-wrapper"}>
        <h3>Mein Girokonto</h3>
        {/* Ausgabe mit zwei Nachkommastellen */}
        <h2>{credit.toFixed(2)} €</h2>
        {console.log(credit)}
        <input
          onInput={(event) => setInput(parseFloat(event.target.value))}
          value={input}
          type="number"
          placeholder="Betrag in €"
          id="input"
          min="0"
        />
        <div>
          <button onClick={addCredit}>Einzahlen</button>

          <button onClick={minusCredit}>Auszahlen</button>
        </div>
      </div>
    </section>
  );
};

export default Konto;
