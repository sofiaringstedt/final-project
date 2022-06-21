import React from "react";

const CardForm = (props) => {
  const { dose, date, batchNumber, setDose, setDate, setBatchNumber, handleForm, dosesArray } = props;

  const currentDose = dosesArray.map(dose => dose.dose);

  const trackedDoseOne = currentDose.includes("Dose 1");
  const trackedDoseTwo = currentDose.includes("Dose 2");
  const trackedDoseThree = currentDose.includes("Dose 3");
  const trackedDoseFour = currentDose.includes("Dose 4");

  const setMinDate = () => {
    let minDate = ""
    const today = new Date();

    switch (dose) {
      case "Dose 1": 
      case "Dose 2":
        const thirtyDaysAgo = today.setDate(today.getDate() - 30);
        minDate = new Date(thirtyDaysAgo).toISOString().split('T')[0]
        break;
      case "Dose 3":
        const fiveMonthsAgo = today.setDate(today.getDate() - 152);
        minDate = new Date(fiveMonthsAgo).toISOString().split('T')[0]
        break;
      case "Dose 4":
        const threeYearsAgo = today.setDate(today.getDate() - 1095);
        minDate = new Date(threeYearsAgo).toISOString().split('T')[0]
        break;
      default:
        break;
    };
    
    return minDate;
  };

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
        min={setMinDate()}
        onChange={((event) => setDate(event.target.value))} />
      <input
        type="text"
        value={batchNumber}
        placeholder="Optional batchnumber"
        onChange={(event) => setBatchNumber(event.target.value)} />
      <button type="submit">Add dose</button>
    </form>
  );
};

export default CardForm;