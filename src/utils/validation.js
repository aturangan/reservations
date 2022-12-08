const moment = require('moment');

export const isValidDate = date => {
  return moment(date, 'MM/DD/YYYY', true).isValid();
};

export const convertDateToObj = date => {
  return moment(date, 'MM/DD/YYYY').toDate();
};

export const isValidTime = time => {
  return moment(time, "HH:mm", true).isValid();
};

export const getTodaysDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return mm + '/' + dd + '/' + yyyy;
};

export const isDateInPresent = date => {
  const todaysDate = getTodaysDate();
  return (
    moment(date).isSame(todaysDate, 'day') || 
    moment(date).isAfter(todaysDate, 'day')
  );
};
