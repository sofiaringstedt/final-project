import { API_URL } from "../utils/urls";

export const handleDoseSubmit = (dose, date, batchNumber, nextDose, setErrorMessage, event) => {
   event.preventDefault();

  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  const doseId = JSON.parse(localStorage.getItem("dose"))?.doseId;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dose,
        date,
        batchNumber,
        nextDose
      })
    };

    fetch(API_URL("dose"), options)
      .then((response) => response.json())
      .then((doseData) => {
        if (doseData.success) {
          localStorage.setItem("dose", JSON.stringify({
            doseId: doseData.response.doseId,
            dose: doseData.response.dose,
            date: doseData.response.date,
            batchNumber: doseData.response.batchNumber,
            nextDose: doseData.response.nextDose
          }))
        } else {
          setErrorMessage(doseData.response);
        };
      })
      .catch((error) => console.log(error));

      if (doseId) {
        const options = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dose,
            date,
            batchNumber,
            nextDose
        })
      }

      fetch(API_URL(`user/${userId}/dose/${doseId}`), options)
        .then((response) => response.json())
        .catch((error) => console.log(error))
      } 
  }