import { API_URL } from "../utils/urls";

export const addDose = (
  dose, 
  date, 
  batchNumber, 
  nextDose, 
  setDate, 
  setDose, 
  setBatchNumber, 
  setErrorMessage, 
  setTrackNewDose,
  setLoading
) => {
  const userId = JSON.parse(localStorage.getItem("user"))?.userId;

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

  setLoading(true); 

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

        const options = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dose,
            date,
            batchNumber,
            nextDose
          })
        };

        fetch(API_URL(`user/${userId}/dose/${doseData.response.doseId}`), options)
          .then((response) => response.json())
          .then(() => setTrackNewDose(true))
          .catch((error) => console.log(error))
          .finally(() => {
            setDose("")
            setDate("")
            setBatchNumber("")
          })

      } else {
        setErrorMessage(doseData.response);
      };
    })
    .catch((error) => console.log(error))
    .finally(() => {
      setTrackNewDose(false);
      setLoading(false);
    });
};

export const startCounter = (setCountDownDay, setCountDownHour, setCountDownMinute, setCountDownSecond, doseInfo, latestDoseDate) => {
  const doseOne = doseInfo.some(dose => dose.dose.includes("Dose 1"))
  const doseTwo = doseInfo.some(dose => dose.dose.includes("Dose 2"))
  const doseThree = doseInfo.some(dose => dose.dose.includes("Dose 3"))
  const doseFour = doseInfo.some(dose => dose.dose.includes("Dose 4"))

  const latestDoseTime = new Date(`${latestDoseDate}, 00:00:00`).getTime();
  const currentTime = new Date().getTime();

  const nextDoseTime = latestDoseTime - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (doseOne) {
     setCountDownDay(Math.floor(nextDoseTime / day) + 30);
  } else if (doseTwo) {
    setCountDownDay(Math.floor(nextDoseTime / day) + 30);
  } else if (doseThree) {
    setCountDownDay(Math.floor(nextDoseTime / day) + 152);
  } else if (doseFour) {
    setCountDownDay(Math.floor(nextDoseTime / day) + 1095);
  } else {
    setCountDownDay(Math.floor(nextDoseTime / day))
  };
 
  setCountDownHour(Math.floor((nextDoseTime % day) / hour));
  setCountDownMinute(Math.floor((nextDoseTime % hour) / minute));
  setCountDownSecond(Math.floor((nextDoseTime % minute) / second));
};


