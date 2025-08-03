import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = parseFloat(rupees) / 90; // Approx 1 Euro = 90 INR
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div>
      <h3>Currency Convertor (INR to Euro)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Converted Amount in Euros: €{euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;
