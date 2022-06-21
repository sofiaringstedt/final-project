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
  setTrackDose,
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
  const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedNextDoseDate = nextDoseDate.toLocaleString("sv", dateOptions);

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
          .then(() => setTrackDose(true))
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
      setTrackDose(false);
      setLoading(false);
    });
};

export const handleDoseDelete = (removeDose, dosesArray, setDosesArray, setTrackDose, setErrorMessage) => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };

  setTrackDose(true)

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
        localStorage.setItem("dose", JSON.stringify(allDosesFromLocalStorage[allDosesFromLocalStorage?.length - 1]));

        if (allDosesFromLocalStorage.length < 1 || allDosesFromLocalStorage  === undefined) {
          const keysToRemove = ["dose", "allDoses"];

          keysToRemove.forEach(key => localStorage.removeItem(key));
        }
      } else {
        setErrorMessage(data.response);
      }
    })
    .catch((error) => console.log(error))
    .finally(() => setTrackDose(false))
};

export const startCounter = (
  setCountDownYear,
  setCountDownMonth,
  setCountDownDay,
  setCountDownHour,
  setCountDownMinute,
  setCountDownSecond,
  dosesArray,
  latestDoseDate
) => {
  const currentDose = dosesArray.map(dose => dose.dose);
  const latestDoseTime = new Date(`${latestDoseDate}, 00:00:0`).getTime();
  const today = new Date();
  let currentTime; 

  if (currentDose.includes("Dose 1") || currentDose.includes("Dose 2")) {
    if (latestDoseTime < new Date().getTime()) {
      currentTime = today.setDate(today.getDate() - 30) || 0;
    } else {
      currentTime = today.setDate(today.getDate() + 30) || 0;
    }
  };

 if (currentDose.includes("Dose 3")) {
   if (latestDoseTime < new Date().getTime()) {
     currentTime = today.setDate(today.getDate() - 152) || 0;
   } else {
     currentTime = today.setDate(today.getDate() + 152) || 0;
   }
 };
 
  if (currentDose.includes("Dose 4")) {
    if (latestDoseTime < new Date().getTime()) {
      currentTime = today.setDate(today.getDate() - 1095) || 0;
    } else {
      currentTime = today.setDate(today.getDate() + 1095) || 0;
    }
  };

  const nextDoseTime = latestDoseTime - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30.4167;
  const year = month * 12;
  const decade = year * 10;

  setCountDownYear(Math.floor((Math.abs(nextDoseTime) % decade) / year) || 0);
  setCountDownMonth(Math.floor((Math.abs(nextDoseTime) % year) / month) || 0);
  setCountDownDay(Math.floor((Math.abs(nextDoseTime) % month) / day) || 0);
  setCountDownHour(Math.floor((Math.abs(nextDoseTime) % day) / hour) || 0);
  setCountDownMinute(Math.floor((Math.abs(nextDoseTime) % hour) / minute) || 0);
  setCountDownSecond(Math.floor((Math.abs(nextDoseTime) % minute) / second) || 0);
};