import React from "react";

const CardForm = (props) => {
  const { dose, date, batchNumber, setDose, setDate, setBatchNumber, handleForm, dosesArray } = props;

  const currentDose = dosesArray.map(dose => dose.dose);

  const trackedDoseOne = currentDose.includes("Dose 1");
  const trackedDoseTwo = currentDose.includes("Dose 2");
  const trackedDoseThree = currentDose.includes("Dose 3");
  const trackedDoseFour = currentDose.includes("Dose 4");

  return (
    <form onSubmit={handleForm}>
      <select value={dose} onChange={(event) => setDose(event.target.value)}>
        <option>Choose dose...</option>
        <option
          value="Dose 1"
          disabled={trackedDoseOne}>
            Dose 1
        </option>
        <option
          value="Dose 2" 
          disabled={trackedDoseOne && !trackedDoseTwo ? false : true}>
            Dose 2
        </option>
        <option 
          value="Dose 3" 
          disabled={trackedDoseOne && trackedDoseTwo && !trackedDoseThree ? false : true}>
            Dose 3
        </option>
        <option 
          value="Dose 4" 
          disabled={trackedDoseOne && trackedDoseTwo && trackedDoseThree && !trackedDoseFour ? false : true}>
            Dose 4
        </option>
      </select>
      <input
        type="date"
        value={date}
        min={new Date().toISOString().split('T')[0]}
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