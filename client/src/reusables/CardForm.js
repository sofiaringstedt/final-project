import React from "react";

const CardForm = (props) => {
  const { dose, date, batchNumber, setDose, setDate, setBatchNumber, handleForm, trackSelectedDose } = props;

  return (
    <form onSubmit={handleForm}>
      <select value={dose} onChange={(event) => setDose(event.target.value)}>
        <option>Choose dose...</option>
        <option value="Dose 1" disabled={trackSelectedDose("Dose 1")}>Dose 1</option>
        <option value="Dose 2" disabled={trackSelectedDose("Dose 2")}>Dose 2</option>
        <option value="Dose 3" disabled={trackSelectedDose("Dose 3")}>Dose 3</option>
        <option value="Dose 4" disabled={trackSelectedDose("Dose 4")}>Dose 4</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={((event) => setDate(event.target.value))} />
      <input
        type="text"
        value={batchNumber}
        placeholder="Optional"
        onChange={(event) => setBatchNumber(event.target.value)} />
      <button type="submit">Add dose</button>
    </form>
  );
};

export default CardForm;