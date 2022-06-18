import { API_URL } from "../utils/urls";

let allDoses = [];

export const addDose = (
  dose,
  doseDate,
  batchNumber,
  setDose,
  setDate,
  setBatchNumber,
  setErrorMessage,
  setTrackNewDose,
  setLoading
) => {
  const userId = JSON.parse(localStorage.getItem("user"))?.userId;

  let addDaysToNextDose
  const doseTaken = new Date(doseDate);

  switch (dose) {
    case "Dose 1":
      addDaysToNextDose = doseTaken.setDate(doseTaken.getDate() + 30);
      break;
    case "Dose 2":
      addDaysToNextDose = doseTaken.setDate(doseTaken.getDate() + 30);
      break;
    case "Dose 3":
      addDaysToNextDose = doseTaken.setDate(doseTaken.getDate() + 152);
      break;
    case "Dose 4":
      addDaysToNextDose = doseTaken.setDate(doseTaken.getDate() + 1095);
      break;
    default:
      break;
  };

  const nextDoseDate = new Date(addDaysToNextDose);
  const formattedNextDoseDate = nextDoseDate
    .toLocaleString("sv", { year: "numeric", month: "2-digit", day: "2-digit" });

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dose,
      date: doseDate,
      batchNumber,
      nextDose: formattedNextDoseDate
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
        }));

        allDoses.push(doseData.response);
        localStorage.setItem("allDoses", JSON.stringify(allDoses));

        const options = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dose,
            date: doseDate,
            batchNumber
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

export const handleDoseDelete = (removeDose, dosesArray, setDosesArray, setErrorMessage) => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };

  fetch(API_URL(`dose/${removeDose._id}`), options)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const filteredDoseArray = dosesArray.filter((el) => el._id !== removeDose._id);
        setDosesArray(filteredDoseArray);

        const allDosesFromLocalStorage = JSON.parse(localStorage.getItem("allDoses"));

        allDosesFromLocalStorage.pop();
        allDoses.pop();

        localStorage.setItem("allDoses", JSON.stringify(allDosesFromLocalStorage));
        localStorage.setItem("dose", JSON.stringify(allDosesFromLocalStorage[allDosesFromLocalStorage?.length - 1]))
        if (allDoses?.length < 1 || allDoses === undefined) {
          localStorage.removeItem("dose")
          localStorage.removeItem("allDoses")
        }
      } else {
        setErrorMessage(data.response);
      }
    })
    .catch((error) => console.log(error))
};

export const startCounter = (
  setCountDownDay,
  setCountDownHour,
  setCountDownMinute,
  setCountDownSecond,
  dosesArray,
  latestDoseDate
) => {
  const latestDoseTime = new Date(`${latestDoseDate}, 24:00:0`).getTime();
  const currentTime = new Date().getTime();

  const nextDoseTime = latestDoseTime - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  setCountDownHour(Math.floor((nextDoseTime % day) / hour));
  setCountDownMinute(Math.floor((nextDoseTime % hour) / minute));
  setCountDownSecond(Math.floor((nextDoseTime % minute) / second));

  const currentDose = dosesArray.map(dose => dose.dose);

  if (currentDose.includes("Dose 1")) setCountDownDay(Math.floor(nextDoseTime / day) + 30);
  if (currentDose.includes("Dose 2")) setCountDownDay(Math.floor(nextDoseTime / day) + 30);
  if (currentDose.includes("Dose 3")) setCountDownDay(Math.floor(nextDoseTime / day) + 152);
  if (currentDose.includes("Dose 4")) setCountDownDay(Math.floor(nextDoseTime / day) + 1095);
};


