import React from "react";

import { 
  ReminderWrapper, 
  ReminderContainer,
  Header, 
  NextDoseTag 
} from "../styled-components/reminder"

import NavigateBackButton from "reusables/NavigateBackButton";

const Reminder = ({ nextDose }) => {
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = new Date(nextDose).toLocaleDateString("en-US", dateOptions);

  return (
    <ReminderWrapper>
      <NavigateBackButton />
      <ReminderContainer>
      <Header>Friendly Reminder</Header>
      <p>
        A single tick bite can give you TBE and there are currently no medicines that
        cures TBE, but vaccines protect.
        {" "}
        The basic vaccination against TBE consists of three doses. You usually get
        two doses every 1-3 months. The third dose can be taken at the earliest after
        5 months and at most 12 months after dose 2. The third dose should be given
        within the same tick season, or at least before the start of the following tick season.
        {" "}
        To maintain your protection, you need to take a fourth dose three years after the third
        dose and then one dose every five years.
      </p>
      <NextDoseTag>{nextDose ? `Your next dose is on ${formattedDate}.` : "Make sure to book your next TBE vaccine dose."}</NextDoseTag>
      </ReminderContainer>
    </ReminderWrapper>
  );
};

export default Reminder;
