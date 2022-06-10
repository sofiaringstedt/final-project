import { API_URL } from "../utils/urls";

export const addDose = (dose, date, batchNumber, nextDose, setErrorMessage, setTrackNewDose) => {
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
          }

          fetch(API_URL(`user/${userId}/dose/${doseData.response.doseId}`), options)
            .then((response) => response.json())
            .then((data) => setTrackNewDose(data))
            .catch((error) => console.log(error))
        
        } else {
          setErrorMessage(doseData.response);
        };
      })
      .catch((error) => console.log(error));
  }

  export const nextDoseCounter = () => {
      const latestDose = new Date("whatever date they put in").getTime() //getTime in milliseconds
      const now = new Date().getTime();
      // const doseNumber = 

      // switch () {

      // }
      
      const nextDose = latestDose - now;
  
      //Time converter
      const second = 1000; //Milliseconds in a second
      const minute = second * 60; 
      const hour = minute * 60;
      const day = hour * 24;
  
      //Calculate
      const textDay = Math.floor(nextDose / day); //Math.floor pushes it down to a full number
      const textHour = Math.floor((nextDose % day) / hour); // % gives you the remainder of, if it's perfectly divided it gives you 0
      const textMinute = Math.floor((nextDose % hour) / minute);
      const textSecond = Math.floor((nextDose % minute) / second);
      console.log(textDay,textHour, textMinute, textSecond)
  };
  setInterval(nextDoseCounter, 1000);
  