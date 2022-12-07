const moment = require('moment');

export const isValidDate = date => {
  // const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  // return dateRegex.test(date);
  return moment(date, 'MM/DD/YYYY', true).isValid();
};

export const convertDateToObj = date => {
  // let parsed = moment(day, 'DD/MM/YYYY');
  // check format
  // return moment(date, 'DD/MM/YYYY').toDate();
  return moment(date, 'MM/DD/YYYY').toDate();
};

export const isValidTime = time => {
  return moment(time, "HH:mm", true).isValid();
};

// The function that I'm then testing against goes like this:

// If the start date is equivalent to the end date, run a check to see whether the current value of end_time is the same or greater than 1 hour after the start time.
// If the start date is not equivalent to the end date, we're not bothered, the validation passes. Remember that we've already checked that the end date cannot be earlier than the start date in the steps above.



// if (state.start_date === moment(end_date).format('ddd MMM DD YYYY')) {
//   return moment(value, 'HH:mm').isSameOrAfter(moment(state.start_time, 'HH:mm').add(1, 'hours'))
// } else {
//   return true
// }