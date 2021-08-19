import { DIFF_TIME, DATE_OPTIONS, DATE_FORMAT } from "utils/constants";
import moment from "moment";

const getDay = (dateText: string[]) => {
  return dateText[0] + " ";
};

const getDate = (dateText: string[]) => {
  dateText.shift();
  const date = dateText.join(" ");
  return date;
};

export const getCurrentDate = () => {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const krCurrentTime = new Date(utcTime + DIFF_TIME.kr);
  const dateText = krCurrentTime
    .toLocaleDateString("en-US", DATE_OPTIONS)
    .split(" ");
  const day = getDay(dateText);
  const dates = getDate(dateText);
  return [day, dates];
};

export const dateToDday = (goalDate: string) => {
  const currentDate = moment();
  return -Math.floor(moment.duration(currentDate.diff(goalDate)).asDays());
};
