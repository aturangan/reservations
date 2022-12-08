import moment from 'moment';

export const getDateObj = (date, startTime, endTime) => {
  const [month, day, year] = date.split('/');
  const [startHours, startMinutes] = startTime.split(':');
  const [endHours, endMinutes] = endTime.split(':');

  const startDateJS = (new Date(+year, month - 1, day, startHours, startMinutes));
  const endDateJS = (new Date(+year, month - 1, day, endHours, endMinutes));

  return [startDateJS, endDateJS];
};

export const get15minAppts = (schedule) => {
  let sortedMeetingBlocks = schedule;
  const appointments = [];
  
  sortedMeetingBlocks.forEach((listing, index) => {
    const fullDate = getDateObj(listing.date, listing.startTime, listing.endTime);
    const startTime = moment(fullDate[0]);
    const maxEndTime = moment(fullDate[1]); 

    const duration = moment.duration(startTime.diff(maxEndTime));
    const minutes = duration.asMinutes();

    if (Math.abs(parseInt(minutes)) < 15) return;

    appointments.push({
      startTime: startTime,
      endTime: moment(startTime).add(15, 'minutes')
    });

    let flag = true;
    while (flag) {
      let newStartTime = moment(appointments[appointments.length - 1].endTime);
      const newEndTime = moment(appointments[appointments.length - 1].endTime).add(15, 'minutes');
  
      if (newEndTime <= moment(maxEndTime)) {
        appointments.push({
          startTime: newStartTime,
          endTime: newEndTime
        });
      } else {
        flag = false;
      }
    }
  });
    
  return appointments;
};
